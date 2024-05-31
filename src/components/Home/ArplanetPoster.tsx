import styled from "styled-components";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

export default function ArplanetPoster() {
  return (
    <StyledArplanetPoster>
      <img src={`${S3URL}poster.jpg`} />
    </StyledArplanetPoster>
  );
}

const StyledArplanetPoster = styled.div`
  margin-bottom: 100px;
  height: 500px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin-bottom: 60px;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
