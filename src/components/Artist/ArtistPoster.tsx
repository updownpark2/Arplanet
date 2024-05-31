import styled from "styled-components";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

export default function ArtistPoster() {
  return (
    <StyledArtistPoster>
      <img src={`${S3URL}artistPoster.jpg`} />
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
