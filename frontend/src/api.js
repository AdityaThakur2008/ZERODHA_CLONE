import axios from "axios";



const API_URL = process.env.REACT_APP_BACKEND;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default api;
