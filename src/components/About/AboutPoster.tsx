import styled from "styled-components";
import { theme } from "../../style/theme";

export default function AboutPoster() {
  return (
    <StyledAboutPoster>
      <img src="aboutPoster.jpg" />
    </StyledAboutPoster>
  );
}

const StyledAboutPoster = styled.div`
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
