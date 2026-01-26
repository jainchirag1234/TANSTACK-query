import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
//Get Posts 
export const fetchPosts = async (pageNumber) => {
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : [];
};
//Get Indv Post 
export const fetchIndPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};
//Delete Post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
//Update Post 
export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};
//infinite Scrolling
export const fetchUsers = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam + 1}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
