import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-clone-1-m3wh.onrender.com",
  withCredentials: true,
});

export default api;
