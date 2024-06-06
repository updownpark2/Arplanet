import styled from "styled-components";
import { Concert } from "../../model/concert.model";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";
import ConcertZero from "./ConcertZero";
import { Link, useSearchParams } from "react-router-dom";
import { CONCERT_QUERYSTRING_KEY } from "../../constants/ConcertQuery";

interface Props {
  concert: Concert[];
}

export default function ConcertLists({ concert }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const plan = searchParams.get(CONCERT_QUERYSTRING_KEY.PLAN);

  if (concert.length === 0) {
    return <ConcertZero />;
  }
  return (
    <StyledConcertLists>
      <div className="header">
        {plan === "all" && <span>전체</span>}
        {plan === "individual" && <span>최혜지 개인프로젝트</span>}
        {plan === "team" && <span>아르플래닛 주최/주관 공연</span>}
      </div>
      <div className="contents">
        <div className="lists">
          {concert.map((data) => (
            <Link to={`/concert/detail`} state={{ data: data }}>
              <div className="list">
                <img src={`${S3URL}${data.mainImg}`} />
                <div className="text">
                  <span className="title">{data.title}</span>
                  <span className="date">{data.date}</span>
                  <span className="location">{data.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </StyledConcertLists>
  );
}

const StyledConcertLists = styled.div`
  .header {
    padding: 100px;
    @media (max-width: ${theme.viewSize.phone}) {
      padding: 50px;
    }
    span {
      font-size: ${theme.text.size.extralarge};
      font-weight: ${theme.text.weight.thick};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
      }
    }
  }
  .contents {
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
    .header {
      text-align: left;
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.thick};
      padding: 50px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
        padding: 20px;
      }
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
  }
`;
