import axios from "axios";

const api = axios.create({
  baseURL: "https://e3362d0390bb.ngrok.io",
});

export default api;
