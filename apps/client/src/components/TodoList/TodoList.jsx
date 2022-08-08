/* eslint-disable react/prop-types */
import {
  ListItemText,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import { baseUrl } from "../../api";
import { Delete, Edit, Save } from "@mui/icons-material";
import axios from "axios";
import useSWR from "swr";

const TodoList = ({
  error,
  data,
  todoToEdit,
  handleDelete,
  handleEdit,
  handleSave,
  handleChange,
}) => {
  if (error) {
    return <Typography>Loading...</Typography>;
  }

  if (data?.length === 0) {
    return <Typography>No data available</Typography>;
  }

  if (data) {
    const todos = data.map(todoObj => {
      return todoObj.name;
    });

    return (
      <List>
        {todos.map(todo => {
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
                    aria-label={todoToEdit !== todo ? "edit" : "save"}
                    onClick={
                      todoToEdit !== todo
                        ? () => handleEdit(todo)
                        : () => handleSave(todo)
                    }
                  >
                    {todoToEdit !== todo ? <Edit /> : <Save />}
                  </IconButton>
                </>
              }
            >
              {todoToEdit !== todo ? (
                <ListItemText primary={todo} />
              ) : (
                <TextField
                  onChange={e => handleChange(e)}
                  size="small"
                  name={todo}
                  defaultValue={todo}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    );
  }
};

export default TodoList;
