import {
  Button,
  Container,
  ListItemText,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

import { Delete, Edit, Save } from "@mui/icons-material";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoToEdit, setTodoToEdit] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [todoList, setTodoList] = useState(["hw", "shopping", "chores"]);

  const handleDelete = todo => {
    setTodoList(prev => {
      const index = prev.indexOf(todo);
      if (index !== -1) {
        prev.splice(index, 1);
        return [...prev];
      }
    });
  };

  const handleEdit = todo => {
    setEditMode(true);
    setTodoToEdit(todo);
    console.log(todo);
  };

  const handleSave = todo => {
    setEditMode(false);
    setTodoToEdit("");
    console.log(todo);
  };

  const handleAdd = () => {
    setTodoList(prev => [...prev, input]);
    console.log(input);
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
      <List>
        {todoList.map(todo => {
          return (
            <ListItem
              key={todo}
              sx={{ width: "20rem" }}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(todo)}
                  >
                    <Delete />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label={editMode === false ? "edit" : "save"}
                    onClick={
                      editMode === false
                        ? () => handleEdit(todo)
                        : () => handleSave(todo)
                    }
                  >
                    {editMode === false ? <Edit /> : <Save />}
                  </IconButton>
                </>
              }
            >
              {todoToEdit !== todo ? (
                <ListItemText primary={todo} />
              ) : (
                <TextField size="small" name={todo} defaultValue={todo} />
              )}
            </ListItem>
          );
        })}
      </List>
      <TextField size="small" onChange={e => handleChange(e)} />
      <Stack direction="row">
        <Button sx={{ mt: 1 }} onClick={handleAdd}>
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

export default App;
