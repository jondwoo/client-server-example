import axios from "axios";

export const baseUrl = "http://localhost:3001";

export const updateTodo = async (updatedTodo, id) => {
  await axios.put(`${baseUrl}/todos/${id}`, {
    updatedTodo,
  });
};
