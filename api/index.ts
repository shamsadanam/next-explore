// api.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async () => {
  const response = await instance.get<
    { id: number; title: string; body: string }[]
  >("/posts");
  return response.data;
};
