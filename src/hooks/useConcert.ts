import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { CONCERT_QUERYSTRING_KEY } from "../constants/ConcertQuery";
import { fetchConcerts } from "../api/concert.api";
import { Concert, FetchConcertResponse } from "../model/concert.model";

export const useConcert = () => {
  const [concert, setConcert] = useState<Concert[]>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const year = searchParams.get(CONCERT_QUERYSTRING_KEY.YEAR);
    const plan = searchParams.get(CONCERT_QUERYSTRING_KEY.PLAN);
    const status = searchParams.get(CONCERT_QUERYSTRING_KEY.STATUS);
    const page = searchParams.get(CONCERT_QUERYSTRING_KEY.PAGE);
    const sort = searchParams.get(CONCERT_QUERYSTRING_KEY.SORT);

    if (year && plan && status && page && sort) {
      const parmas: FetchConcertResponse = {
        year: year,
        plan: plan,
        status: status,
        page: page,
        sort: sort,
      };

      const getConcert = async () => {
        const concertData = await fetchConcerts(parmas);
        setConcert(concertData);
      };

      getConcert();
    }
  }, [location.search]);

  return { concert };
};
