import axios from "axios";

export const baseUrl = "http://localhost:3001";

export const createTodo = async body => {
  const res = await axios.post(`${baseUrl}/todos`, body);

  return res.data;
};

export const getTodo = () => {
  return `${baseUrl}/`;
};
