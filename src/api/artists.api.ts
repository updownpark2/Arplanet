import { http } from "./http";

export const fetchArtists = async () => {
  const response = await http.get(`/artists`);
  return response.data;
};
