import { useEffect, useState } from "react";
import { Concert } from "../model/concert.model";
import { fetchTicket } from "../api/ticket.api";

export const useTicket = () => {
  const [ticket, setTicket] = useState<Concert[]>();

  useEffect(() => {
    const getTicket = async () => {
      const response = await fetchTicket();
      setTicket(response);
    };

    getTicket();
  }, []);

  return { ticket };
};
