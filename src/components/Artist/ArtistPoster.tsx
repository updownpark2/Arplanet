import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ArtistPoster() {
  return (
    <StyledArtistPoster>
      <img src="artistPoster.jpg" />
    </StyledArtistPoster>
  );
}

const StyledArtistPoster = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    @media (max-width: ${theme.viewSize.phone}) {
      height: 200px;
    }
  }
`;
