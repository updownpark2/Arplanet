import { useSearchParams } from "react-router-dom";
import {
  CONCERT_QUERYSTRING_KEY,
  CONCERT_QUERYSTRING_VALUE,
} from "../../constants/ConcertQuery";
import { useEffect, useState } from "react";
import { showPlanFormatter } from "../../utils/foramtter";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import styled from "styled-components";
import { theme } from "../../style/theme";

export default function TicketFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const plan = searchParams.get(CONCERT_QUERYSTRING_KEY.PLAN);
  const [isActiveP, setIsActiveP] = useState(false);

  const activeP = () => {
    setIsActiveP((current) => !current);
  };

  const handlePlanOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const getPlan = target.id;
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.PLAN, getPlan);
    setSearchParams(params);
    activeP();
  };

  useEffect(() => {
    const params = searchParams;
    params.set(CONCERT_QUERYSTRING_KEY.PLAN, CONCERT_QUERYSTRING_VALUE.PLAN);
    setSearchParams(params);
  }, []);

  return (
    <StyledConcertFilter>
      <div className="filter">
        <div className="select">
          <span className="title">기획</span>
          <span className="show" onClick={activeP}>
            {plan && showPlanFormatter(plan)}
            {isActiveP ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
          {isActiveP && (
            <div className="option" onClick={handlePlanOption}>
              <li id="all">전체</li>
              <li id="team">아르플래닛 주최/주관 공연</li>
              <li id="individual">최혜지 개인프로젝트</li>
            </div>
          )}
        </div>
      </div>
    </StyledConcertFilter>
  );
}

const StyledConcertFilter = styled.div`
  li {
    list-style: none;
  }
  padding: 40px;
  border-bottom: 1px solid ${theme.color.gray};
  margin-bottom: 20px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 20px;
  }

  .filter {
    margin-left: 60px;
    @media (max-width: ${theme.viewSize.phone}) {
      margin-left: 0;
    }
    display: flex;
    @media (max-width: ${theme.viewSize.phone}) {
      justify-content: left;
    }
    .select {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      padding: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        padding: 5px;
      }
      .title {
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.medium};
        color: ${theme.color.gray};
        margin-bottom: 10px;
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.semismall};
        }
      }
      .show {
        cursor: pointer;
        padding: 10px 25px;
        border-radius: 5px;
        border: 1px solid ${theme.color.gray};
        transition: transform 0.3s ease;
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.medium};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.verysmall};
          font-weight: ${theme.text.weight.semithin};
          padding: 5px 10px;
        }
      }
      .show:hover {
        transform: scale(1.05);
      }
      .option {
        text-align: left;
        margin-top: 5px;
        border-radius: 5px;
        box-shadow: 0.7px 0.7px 0.7px 0.7px ${theme.color.lightgray};
        border: 0.5px solid black;
        li {
          padding: 10px 10px;
          font-size: ${theme.text.size.semismall};
          font-weight: ${theme.text.weight.medium};
          @media (max-width: ${theme.viewSize.phone}) {
            font-size: ${theme.text.size.verysmall};
          }
        }
        li:hover {
          background-color: ${theme.color.darkgray};
          color: ${theme.color.white};
        }
      }
    }
  }
`;
