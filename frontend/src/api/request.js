import axios from 'axios';

const axiosApi = axios.create({
  baseURL: "http://localhost:3000/tasks",
  headers: {"content-type": "application/json"}
});

export default axiosApi;
