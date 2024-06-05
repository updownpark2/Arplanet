import { FetchConcertResponse } from "../model/concert.model";
import { http } from "./http";

export const fetchConcerts = async (params: FetchConcertResponse) => {
  const response = await http.get(`/concert`, { params: params });

  return response.data;
};

export const fetchConcertsTotal = async () => {
  const response = await http.get(`/concert/total`);
  return response.data;
};
