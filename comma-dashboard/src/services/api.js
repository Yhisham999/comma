import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Backend API URL
});

export default api;
