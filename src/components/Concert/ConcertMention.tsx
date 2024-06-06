import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ConcertMention() {
  return (
    <StyledConcertMention>
      <div className="title">
        <span>아르플래닛의 젊음과 열정의 선율</span>
      </div>
      <div className="content">
        <span>
          아르플래닛의 클래식 콘서트는 젊음과 열정이 넘치는 연주자들이 펼치는
          음악의 향연입니다. 이 콘서트는 단순한 공연을 넘어, 예술적 교감을
          나누는 소중한 시간으로 기억될 것입니다.
        </span>
        <span>
          아르플래닛의 클래식 무대는 특별한 추억을 남길 것이며, 음악의 힘을
          느끼게 하는 특별한 순간을 선사할 것입니다. 매 순간이 감동으로 채워질
          이 환상적인 음악의 축제에 여러분을 초대합니다.
        </span>
        <span>
          아르플래닛 공연은 아르플래닛 주최/주관 공연과 최혜지 개인 프로젝트로
          나뉘어 꾸준히 기획되어 나아가고 있습니다.
        </span>
      </div>
    </StyledConcertMention>
  );
}

const StyledConcertMention = styled.div`
  display: flex;
  flex-direction: column;

  padding: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 20px;
  }
  .title {
    display: flex;
    flex-direction: column;
    font-size: ${theme.text.size.extralarge};
    font-weight: ${theme.text.weight.thick};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.large};
    }
    span {
      margin-top: 20px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    font-size: ${theme.text.size.large};
    font-weight: ${theme.text.weight.semithin};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.semismall};
      font-weight: ${theme.text.weight.semithin};
    }
    span {
      margin-top: 20px;
      line-height: 32px;
      @media (max-width: ${theme.viewSize.phone}) {
        line-height: 20px;
      }
    }
  }
`;
