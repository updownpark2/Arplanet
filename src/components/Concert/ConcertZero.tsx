import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ConcertZero() {
  return (
    <StyledConcertZero>
      <div className="title">
        <span>현재 카테고리의 공연정보가 없습니다.</span>
      </div>
    </StyledConcertZero>
  );
}

const StyledConcertZero = styled.div`
  padding: 50px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 20px;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: ${theme.text.size.extralarge};
      font-weight: ${theme.text.weight.thick};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.medium};
      }
    }
  }
`;
