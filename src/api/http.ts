import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          return Promise.resolve({ data: [] });
        default:
          break;
      }
    } else {
      console.error("No response received from server");
    }
    return Promise.reject(error);
  }
);
