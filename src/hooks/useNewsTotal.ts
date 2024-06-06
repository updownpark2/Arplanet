import { useEffect, useState } from "react";
import { fetchNewsTotal } from "../api/news.api";
import { INewsTotal } from "../model/News.model";

const NewsTotal = {
  total: 1,
};

export const useNewsTotal = () => {
  const [newsTotal, setNewsTotal] = useState<INewsTotal>(NewsTotal);
  useEffect(() => {
    const getNewsTotal = async () => {
      const response = await fetchNewsTotal();
      setNewsTotal(response);
    };
    getNewsTotal();
  }, []);

  return { newsTotal };
};
