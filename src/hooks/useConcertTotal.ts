import { useEffect, useState } from "react";
import { fetchConcertsTotal } from "../api/concert.api";
import { IConcertTotal } from "../model/concert.model";

const ConcertTotal: IConcertTotal = {
  total: 1,
};

export const useConcertTotal = () => {
  const [concertTotal, setConcertTotal] = useState<IConcertTotal>(ConcertTotal);
  useEffect(() => {
    const getTotal = async () => {
      const response = await fetchConcertsTotal();
      setConcertTotal(response);
    };
    getTotal();
  }, []);

  return { concertTotal };
};
