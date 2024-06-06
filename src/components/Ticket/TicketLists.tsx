import styled from "styled-components";
import { Concert } from "../../model/concert.model";
import ConcertZero from "../Concert/ConcertZero";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

interface Props {
  ticket: Concert[];
  openCard: () => void;
}

export default function TicketLists({ ticket, openCard }: Props) {
  if (ticket.length === 0) {
    return <ConcertZero />;
  }

  const handleClickList = (ticketUrl: string) => {
    if (ticketUrl !== "") {
      return window.open(ticketUrl);
    }
    openCard();
  };

  return (
    <StyledTicketLists>
      <div className="lists">
        {ticket.map((data) => (
          <div className="list" onClick={() => handleClickList(data.ticketUrl)}>
            <img src={`${S3URL}${data.mainImg}`} />
            <div className="text">
              <span className="title">{data.title}</span>
              <span className="date">{data.date}</span>
              <span className="location">{data.location}</span>
            </div>
          </div>
        ))}
      </div>
    </StyledTicketLists>
  );
}

const StyledTicketLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }

  .lists {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    @media (max-width: ${theme.viewSize.phone}) {
      grid-template-columns: repeat(2, 2fr);
    }
    .list {
      width: 300px;
      cursor: pointer;
      transition: transform 0.3s ease;
      height: 540px;
      @media (max-width: ${theme.viewSize.phone}) {
        width: 140px;
        height: 310px;
      }
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      gap: 10px;
      img {
        width: 100%;
        object-fit: cover;
      }
      .text {
        height: 20%;
        padding: 10px;
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.medium};
        margin-bottom: 10px;
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.small};
        }
      }
      .date {
        font-size: ${theme.text.size.small};
        color: ${theme.color.black};
        opacity: 0.4;
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.verysmall};
        }
      }
      .location {
        font-size: ${theme.text.size.small};
        opacity: 0.4;
        color: ${theme.color.black};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.verysmall};
        }
      }
    }
    .list:hover {
      transform: scale(1.05);
    }
  }
`;
