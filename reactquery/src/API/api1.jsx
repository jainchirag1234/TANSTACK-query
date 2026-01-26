import axios from "axios";

// axios instance
export const api1 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000, // optional
  headers: {
    "Content-Type": "application/json",
  },
});

// fetch posts
export const fetchPosts = async () => {
  try {
    const response = await api1.get("/posts");
    return response.data; // ✅ sirf data return
  } catch (error) {
    console.error("API Error:", error);
    throw error; // 👈 component ko pata chale error aaya
  }
};
