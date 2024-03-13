import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token 4fea2c64ddf24377a6f29a8c579e8087373953d4",
  },
});
