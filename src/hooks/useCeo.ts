import { useEffect, useState } from "react";
import { CEO } from "../model/ceo.model";
import { fetchCeo } from "../api/ceo.api";

export const useCeo = () => {
  const [ceoData, setCeoData] = useState<CEO>();

  useEffect(() => {
    fetchCeo().then((response) => {
      const getCeoData = response;
      setCeoData(getCeoData);
    });
  }, []);

  return { ceoData };
};
