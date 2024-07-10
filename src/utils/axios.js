import axios from "axios";

const baseURL = "https://fourjunctionsbackend.onrender.com/api";
// const baseURL = "https://localhost:5000/api";

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 5 * 10000,
  headers: {
    Accept: "application/json",
    authorization: `Bearer`,
  },
});
