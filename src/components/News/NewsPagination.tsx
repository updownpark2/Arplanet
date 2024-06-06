import styled from "styled-components";
import { useNewsTotal } from "../../hooks/useNewsTotal";
import { useSearchParams } from "react-router-dom";
import { NEWS_QUERYSTRING_KEY } from "../../constants/NewsQuery";
import { theme } from "../../style/theme";

export default function NewsPagination() {
  // 전체 데이터양을 가져와야함
  let { newsTotal } = useNewsTotal();

  const pageArr = Array.from(
    { length: Math.ceil(newsTotal.total / 10) },
    () => null
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePage = (page: number) => {
    const params = searchParams;
    params.set(NEWS_QUERYSTRING_KEY.PAGE, String(page));
    setSearchParams(params);
  };

  return (
    <StyledNewsPagination>
      <div className="pagination">
        {pageArr.map((item, i) => (
          <span key={i} onClick={() => handlePage(i + 1)}>
            {i + 1}
          </span>
        ))}
      </div>
    </StyledNewsPagination>
  );
}

const StyledNewsPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    font-size: ${theme.text.size.semismall};
    font-weight: ${theme.text.weight.semithin};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.small};
      font-weight: ${theme.text.weight.thin};
    }
    span {
      background-color: ${theme.color.white};
      border: 0.5px solid black;
      cursor: pointer;
      padding: 5px 7px;
      border-radius: 3px;
      margin-right: 5px;
      @media (max-width: ${theme.viewSize.phone}) {
        padding: 4px 6px;
        border-radius: 2px;
        margin-right: 3px;
      }
    }
    span:hover {
      background-color: ${theme.color.darkgray};
      color: ${theme.color.white};
    }
  }
  margin-bottom: 20px;
`;
