import styled from "styled-components";
import { theme } from "../../style/theme";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  NEWS_QUERYSTRING_KEY,
  NEWS_QUERYSTRING_VALUE,
} from "../../constants/NewsQuery";
import { showSortFormatter } from "../../utils/foramtter";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function NewsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActiveSort, setIsActiveSort] = useState(false);
  const activeSort = () => {
    setIsActiveSort((current) => !current);
  };

  const sort = searchParams.get(NEWS_QUERYSTRING_KEY.SORT);

  useEffect(() => {
    const params = searchParams;
    params.set(NEWS_QUERYSTRING_KEY.SORT, NEWS_QUERYSTRING_VALUE.SORT);
    params.set(NEWS_QUERYSTRING_KEY.PAGE, NEWS_QUERYSTRING_VALUE.PAGE);
    setSearchParams(params);
  }, []);

  const handleSortOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const getSort = target.id;
    const params = searchParams;
    params.set(NEWS_QUERYSTRING_KEY.SORT, getSort);
    setSearchParams(params);
    activeSort();
  };
  return (
    <StyledNewFilter>
      <div className="filter">
        <div className="select">
          <span className="title">정렬</span>
          <span className="show" onClick={activeSort}>
            {sort && showSortFormatter(sort)}
            {isActiveSort ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </span>
          {isActiveSort && (
            <div className="option" onClick={handleSortOption}>
              <li id="DESC">최신순</li>
              <li id="ASC">오래된순</li>
            </div>
          )}
        </div>
      </div>
    </StyledNewFilter>
  );
}

const StyledNewFilter = styled.div`
  li {
    list-style: none;
  }
  padding: 40px;
  border-top: 1px solid ${theme.color.gray};
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
          font-size: ${theme.text.size.small};
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
