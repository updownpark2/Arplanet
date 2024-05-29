import styled from "styled-components";
import ArtistSlider from "../components/Home/ArtistSlider";

export default function Home() {
  return (
    <StyledHome>
      <ArtistSlider />
    </StyledHome>
  );
}

const StyledHome = styled.div``;
