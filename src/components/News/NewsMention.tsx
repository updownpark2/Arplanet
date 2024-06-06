import styled from "styled-components";
import { theme } from "../../style/theme";

export default function NewsMention() {
  return (
    <StyledNewsMention>
      <div className="title">
        <span>아르플래닛의 새로운 소식</span>
      </div>
      <div className="content">
        <span>
          광주 지역의 젊은 클래식 아티스트들이 모여 있는 아르플래닛의 소식을
          전해드립니다.
        </span>
        <span>
          이곳에서는 우리의 새로운 공연 일정, 아티스트들의 특별한 이야기, 그리고
          음악을 통한 지역 사회 기여 활동 등을 한눈에 볼 수 있습니다.
        </span>
        <span>
          아르플래닛은 클래식 음악의 아름다움을 널리 알리고, 예술가들의 잠재력을
          최대한으로 끌어내기 위해 최선을 다하고 있습니다.
        </span>
        <span>우리의 여정을 함께하며, 클래식 음악의 매력에 빠져보세요.</span>
      </div>
    </StyledNewsMention>
  );
}

const StyledNewsMention = styled.div`
  display: flex;
  flex-direction: column;

  padding: 100px 150px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 20px;
  }
  .title {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    font-size: ${theme.text.size.extralarge};
    font-weight: ${theme.text.weight.thick};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.large};
    }
    span {
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
      margin-top: 10px;
    }
  }
`;
