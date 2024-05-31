import styled from "styled-components";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

export default function AboutPoster() {
  return (
    <StyledAboutPoster>
      <img src={`${S3URL}aboutPoster.jpg`} />
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
