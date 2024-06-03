import { useEffect, useState } from "react";
import { fetchHistory } from "../api/history.api";

export const useHistory = () => {
  const [history, setHistory] = useState();

  useEffect(() => {
    fetchHistory().then((response) => {
      const getHistory = response;
      setHistory(getHistory);
    });
  }, []);

  return { history };
};
