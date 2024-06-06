import styled from "styled-components";
import ArtistSlider from "../components/Home/ArtistSlider";
import ArtistCard from "../components/Home/ArtistCard";
import { useState } from "react";
import ArplanetPoster from "../components/Home/ArplanetPoster";
import ArplanetAbout from "../components/Home/ArplanetAbout";
import ArplanetHistory from "../components/Home/ArplanetHistory";
import ArplanetKaKao from "../components/Home/ArplanetKaKao";
import { useArtists } from "../hooks/useArtists";
import { useHistory } from "../hooks/useHistory";
import HomeMeta from "../metadatas/HomeMeta";

export default function Home() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const { artists } = useArtists();
  const { history } = useHistory();
  const openCard = () => {
    setCardOpen(true);
  };
  const closeCard = () => {
    setCardOpen(false);
  };
  const handleCardIndex = (i: number) => {
    setCardIndex(i);
  };

  return (
    <>
      <HomeMeta />
      <StyledHome>
        {cardOpen && (
          <ArtistCard closeCard={closeCard} cardInfo={artists[cardIndex]} />
        )}
        <ArplanetPoster />
        <ArtistSlider
          openCard={openCard}
          handleCardIndex={handleCardIndex}
          artists={artists}
        />
        <ArplanetAbout />
        {history && <ArplanetHistory history={history} />}
        <ArplanetKaKao />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.div`
  position: relative;
  height: 100%;
`;
