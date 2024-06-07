import { IPram } from "../hooks/useTicket";
import { http } from "./http";

export const fetchTicket = async (param: IPram) => {
  const response = await http.get(`/ticket`, { params: param });
  return response.data;
};
