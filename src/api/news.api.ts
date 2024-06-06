import { IParams } from "../model/News.model";
import { http } from "./http";

export const fetchNews = async (params: IParams) => {
  const response = await http.get(`/news`, { params: params });
  return response.data;
};

export const fetchNewsTotal = async () => {
  const response = await http.get(`/news/total`);
  return response.data;
};
