import { http } from "./http";

export const fetchTicket = async () => {
  const response = await http.get(`/ticket`);
  return response.data;
};
