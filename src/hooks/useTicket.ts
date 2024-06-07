import { useEffect, useState } from "react";
import { Concert } from "../model/concert.model";
import { fetchTicket } from "../api/ticket.api";
import { useLocation, useSearchParams } from "react-router-dom";
import { CONCERT_QUERYSTRING_KEY } from "../constants/ConcertQuery";

export interface IPram {
  plan: string;
}

export const useTicket = () => {
  const [ticket, setTicket] = useState<Concert[]>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const plan = searchParams.get(CONCERT_QUERYSTRING_KEY.PLAN);
    if (plan) {
      const param: IPram = {
        plan: plan,
      };
      const getTicket = async () => {
        const response = await fetchTicket(param);
        setTicket(response);
      };

      getTicket();
    }
  }, [location.search]);

  return { ticket };
};
