import styled from "styled-components";
import ArtistSlider from "../components/Home/ArtistSlider";
import ArtistCard from "../components/Home/ArtistCard";
import { useState } from "react";
import { ArtistsDummy, IArtistInfo } from "../utils/ArtistDummy";
import ArplanetPoster from "../components/Home/ArplanetPoster";
import ArplanetAbout from "../components/Home/ArplanetAbout";
import ArplanetHistory from "../components/Home/ArplanetHistory";

export default function Home() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const artistsInfo: IArtistInfo[] = ArtistsDummy;
  // 이후에는 DB에서 가져오도록해야함

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
    <StyledHome>
      {cardOpen && (
        <ArtistCard closeCard={closeCard} cardInfo={artistsInfo[cardIndex]} />
      )}
      <ArplanetPoster />
      <ArtistSlider openCard={openCard} handleCardIndex={handleCardIndex} />
      <ArplanetAbout />
      <ArplanetHistory />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  position: relative;
  height: 100%;
`;
