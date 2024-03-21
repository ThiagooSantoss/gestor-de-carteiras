import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token aea171df0f5753cdf7ed39c5041720cb9be2b277",
  },
});
