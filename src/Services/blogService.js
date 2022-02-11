import axios from "axios";

export const getPosts = async (start, limit) => {
  let result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
  );
  return result.data;
};
