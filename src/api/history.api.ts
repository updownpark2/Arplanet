import { http } from "./http";

export const fetchHistory = async () => {
  const response = await http.get(`/history`);
  return response.data;
};
