import styled from "styled-components";
import { theme } from "../../style/theme";

export default function TicketPoster() {
  return (
    <StyledTicketPoster>
      <img src={`${process.env.REACT_APP_S3_URL}ConcertHeader.jpg`} />
    </StyledTicketPoster>
  );
}

const StyledTicketPoster = styled.div`
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
