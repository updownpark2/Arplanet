import { useEffect, useState } from "react";
import { INews, IParams } from "../model/News.model";
import { useLocation, useSearchParams } from "react-router-dom";
import { NEWS_QUERYSTRING_KEY } from "../constants/NewsQuery";
import { fetchNews } from "../api/news.api";

export const useNews = () => {
  const [news, setNews] = useState<INews[]>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const sort = searchParams.get(NEWS_QUERYSTRING_KEY.SORT);
    const page = searchParams.get(NEWS_QUERYSTRING_KEY.PAGE);

    if (sort && page) {
      const params: IParams = {
        sort: sort,
        page: page,
      };
      const getNews = async () => {
        const newsData = await fetchNews(params);
        setNews(newsData);
      };
      getNews();
    }
  }, [location.search]);

  return { news };
};
