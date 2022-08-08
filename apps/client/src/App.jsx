import {
  Button,
  Container,
  TextField,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

import TodoList from "./components/TodoList/TodoList";
import { createTodo, baseUrl } from "./api";
import { mutate } from "swr";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoToEdit, setTodoToEdit] = useState();

  const handleDelete = todo => {
    // impl
  };

  const handleEdit = todo => {
    setTodoToEdit(todo);
    // impl
  };

  const handleSave = async todo => {
    setTodoToEdit();
  };

  const handleAdd = async () => {
    await createTodo({
      name: input,
    });
    setInput("");
    mutate(`${baseUrl}/todos`);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>TODO List</Typography>
      <Divider flexItem />
      <TodoList
        todoToEdit={todoToEdit}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
      <TextField size="small" value={input} onChange={e => handleChange(e)} />
      <Stack direction="row">
        <Button sx={{ mt: 1 }} onClick={handleAdd}>
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

export default App;
