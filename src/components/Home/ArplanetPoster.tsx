import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ArplanetPoster() {
  return (
    <StyledArplanetPoster>
      <img src="poster.jpg" />
    </StyledArplanetPoster>
  );
}

const StyledArplanetPoster = styled.div`
  height: auto;
  margin-bottom: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin-bottom: 60px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
