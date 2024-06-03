import { useEffect, useState } from "react";
import { fetchArtists } from "../api/artists.api";
import { Artists } from "../model/artists.model";

export const useArtists = () => {
  const [artists, setArtists] = useState<Artists[]>([]);

  useEffect(() => {
    fetchArtists().then((response) => {
      const getArtistsData = response.artists;
      setArtists(getArtistsData);
    });
  }, []);

  return { artists };
};
