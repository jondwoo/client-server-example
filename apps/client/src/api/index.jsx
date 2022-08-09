import axios from "axios";

export const baseUrl = "http://localhost:3001";

export const updateTodo = async (updatedTodo, id) => {
  await axios.put(`${baseUrl}/todos/${id}`, {
    updatedTodo,
  });
};

export const addTodo = async newTodo => {
  await axios.post(`${baseUrl}/todos/`, {
    newTodo,
  });
};

export const deleteTodo = async id => {
  await axios.delete(`${baseUrl}/todos/${id}`);
};
