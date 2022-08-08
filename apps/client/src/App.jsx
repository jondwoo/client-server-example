import {
  Button,
  Container,
  TextField,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

import axios from "axios";
import TodoList from "./components/TodoList/TodoList";
import { updateTodo, baseUrl } from "./api";
import useSWR, { mutate } from "swr";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoToEdit, setTodoToEdit] = useState();

  const fetcher = url => axios.get(url).then(res => res.data);
  const { data: TodoObjArray, error } = useSWR(`${baseUrl}/todos`, fetcher);

  const handleDelete = todo => {
    // impl
  };

  const handleEdit = todo => {
    setTodoToEdit(todo);
  };

  const handleSave = async currentTodo => {
    const filteredArray = TodoObjArray.filter(obj => {
      return obj.name === currentTodo;
    });

    await updateTodo(input, filteredArray[0]._id);

    setTodoToEdit();

    mutate(`${baseUrl}/todos`);
  };

  const handleAdd = async () => {
    setInput("");
    // impl
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
        error={error}
        data={TodoObjArray}
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
