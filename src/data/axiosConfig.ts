import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api/users",
  timeout: 1000,
  headers: { "Content-type": "application/json" },
});

export default axiosInstance;
