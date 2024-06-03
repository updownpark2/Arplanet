import { http } from "./http";

export const fetchCeo = async () => {
  const response = await http.get(`/ceo`);
  return response.data;
};
