import styled from "styled-components";
import { theme } from "../../style/theme";

export default function AboutPlaner() {
  return (
    <StyledAboutPlaner>
      <div className="planner">
        <img src="capibara.jpeg" />
        <div className="contents">
          <div className="name">
            <div className="en">
              <span>CHOI HYE JI</span>
            </div>
            <div className="kr">
              <span>대표 최혜지</span>
            </div>
          </div>
        </div>
      </div>

      <div className="introduce">
        <div className="content">
          <span className="subtitle">최혜지</span>
          <span>예술단체 Arplanet 아르플래닛 대표</span>
          <span>pianist / a performance planner</span>
          <span>제9기 광주광역시 청년위원회 참여홍보분과 위원</span>
          <span>동구청년센터 ‘영파일럿’ 멘토</span>
        </div>
        <div className="content">
          <span className="subtitle">학력</span>
          <span>전남대학교 예술대학 음악학과 피아노전공 졸업</span>
          <span>
            현 전남대학교 일반대학원 예술대학 음악학과 피아노전공 석사과정 재학
          </span>
        </div>
        <div className="content">
          <span className="subtitle">교육/수상</span>
          <span>2023 광주광역시 청년문화예술기획자 양성학교 수료</span>
          <span>2023 광주광역시 청년문화예술기획자 양성학교 </span>
          <span>개인 프로젝트 ‘Remember Artist' 최우수상 시장상 수상</span>
        </div>
        <div className="content">
          <span className="subtitle">연주경력</span>
          <span>전남대학교 제 10회 낭만 피아노 음악의 밤 출연</span>
          <span>음악교육신문 초청 신춘음악회 연주</span>
          <span>음악교육신문 초청 제32회 영아티스트콘서트 연주</span>
          <span>전남대학교 융복합 미디어아트 프로젝트 'The Color' 출연</span>
          <span>2021 Cuara Symphony Orchestra 정기연주회 협연</span>
          <span>2023 달성 100대 피아노 출연</span>
          <span>2024 Lieto piano concert 출연</span>
        </div>
        <div className="content">
          <span className="subtitle">기획/연출</span>
          <span>2023 Remember Artist 예술가를 기억하다. 총기획</span>
          <span>2024 Lieto piano concert 총기획</span>
          <span>Arplanet 아르플래닛 창단기념 음악회 총기획</span>
          <span>
            &lt;2024 최혜지 공연기획 시리즈 Ⅰ&gt; 쇼팽 서거 175주기 음악회
            ‘쇼팽을 말하다’ 진행중 총기획
          </span>
          <span></span>&lt;2024 최혜지 공연기획 시리즈 Ⅱ&gt; 스승의날 기념
          음악회 ‘사운드 오브 뮤직’ 총기획
        </div>
      </div>
    </StyledAboutPlaner>
  );
}

const StyledAboutPlaner = styled.div`
  display: flex;
  flex-direction: column;
  .planner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    img {
      width: 40%;
    }
  }
  .introduce {
    margin-left: 12%;
    padding: 50px;
    @media (max-width: ${theme.viewSize.phone}) {
      margin-left: 5%;
      padding: 20px;
    }
    display: flex;
    flex-direction: column;
    .content {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.semithin};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.thin};
      }
      .subtitle {
        font-size: ${theme.text.size.large};
        font-weight: ${theme.text.weight.medium};
        margin-bottom: 10px;
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
          font-weight: ${theme.text.weight.semithin};
        }
      }
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .en {
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.semithin};
      color: ${theme.color.lightgray};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
      }
    }
    .kr {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.medium};
      margin-top: 5px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
      }
    }
  }
`;
