import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ArplanetHistory() {
  return (
    <StyledArplanetHistory>
      <div className="title">
        <span className="name">ARPLANET 아르플래닛</span>
        <span className="name">
          Experience the brilliance of classical performances with ARPLANET.
        </span>
        <span className="content">
          광주광역시 청년예술인 육성 클래식 음악 공연기획/연주 단체
        </span>
        <span className="content">
          아름다운, Art(예술적인, 더 전문적인), Artist + Planet 을 합친 브랜드로
        </span>
        <span className="content">
          획기적이고 전문적인 예술단체를 운영하는 노하우와 기획력으로 유일한,
          유난히 빛나는 단체를 아우르는 명칭입니다.
        </span>
      </div>
      <div className="history">
        <span>- 2024.01.31 아르플래닛 창단</span>
        <span>- 2024.04.28 아르플래닛 창단 기념 음악회</span>
        <span>- 2024.07.11 광주문화재단 목요콘서트 &lt;색채의 멜로디&gt;</span>
        <span>- 2024.07.24 아르플래닛 초청 안소연 피아노 독주회</span>
        <span>
          - 2024.12.08 2024 북구청 문화예술단체 지원사업 &lt;아르플래닛 협주곡의
          밤&gt;
        </span>
      </div>
    </StyledArplanetHistory>
  );
}

const StyledArplanetHistory = styled.div`
  margin-left: 10%;
  padding: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin-left: 0;
    padding: 32px;
  }
  .title {
    display: flex;
    flex-direction: column;
    .name {
      font-size: ${theme.text.size.extralarge};
      font-weight: ${theme.text.weight.thick};
      margin-bottom: 20px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.medium};
        margin-bottom: 10px;
      }
    }
    .content {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.thin};
      margin-top: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
        font-weight: ${theme.text.weight.semithin};
      }
    }
  }
  .history {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    opacity: 0.7;
    span {
      margin-top: 10px;
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.medium};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
        font-weight: ${theme.text.weight.semithin};
        margin-top: 5px;
      }
    }
  }
`;
