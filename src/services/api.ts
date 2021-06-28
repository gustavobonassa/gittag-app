import axios from "axios";

const api = axios.create({
  baseURL: "https://gittag-backend.herokuapp.com/",
});

export default api;
