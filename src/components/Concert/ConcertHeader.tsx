import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ConcertHeader() {
  return (
    <StyledConcertHeader>
      <img src={`${process.env.REACT_APP_S3_URL}ConcertHeader.jpg`} />
    </StyledConcertHeader>
  );
}

const StyledConcertHeader = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 530px;
    object-fit: cover;
    @media (max-width: ${theme.viewSize.phone}) {
      height: 200px;
    }
  }
`;
