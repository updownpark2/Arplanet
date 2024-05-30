import styled from "styled-components";
import { theme } from "../../style/theme";

export default function AboutMention() {
  return (
    <StyledAboutMention>
      <div className="title">
        <span>탁월한 감동, 잊을 수 없는 순간, ARPLANET에서 만나보세요.</span>
        <span>
          아르플래닛은 광주광역시 청년 예술인 육성 클래식 음악
          공연기획/연주단체입니다.
        </span>
      </div>
      <div className="contents">
        <span>
          아르플래닛(Arplanet)은 광주광역시의 청년 예술인을 육성하고 클래식 음악
          공연을 기획 및 연주하는 단체입니다. ‘아르플래닛’이라는 이름은
          아름다움(Art)과 예술가(Artist), 그리고 행성(Planet)을 결합하여 탄생한
          브랜드로, 혁신적이고 전문적인 예술 단체를 운영하는 우리의 노하우와
          기획력을 통해 유일무이하고 빛나는 존재를 지향합니다.
        </span>
        <span>
          우리 단체는 클래식 음악의 전통을 현대적 감각으로 재해석하여 독창적이고
          감동적인 공연을 선사합니다. 아르플래닛은 예술의 아름다움을 더욱 깊이
          탐구하며, 전문적인 접근을 통해 예술가들이 그들의 잠재력을 최대한
          발휘할 수 있도록 지원합니다. 이를 통해 우리는 예술적 성장을 촉진하고,
          지역 사회에 활력을 불어넣으며, 더 나아가 글로벌 무대에서도 그 빛을
          발할 수 있는 단체로 자리매김하고자 합니다.
        </span>
        <span>
          우리는 클래식 음악을 사랑하는 모든 이들에게 특별한 경험을 선사하고,
          예술을 통해 사람들의 삶에 긍정적인 변화를 일으키는 것을 목표로 합니다.
          아르플래닛은 그 이름처럼, 한편으로는 따뜻하고 아름다운 예술의 세계를,
          다른 한편으로는 혁신적이고 도전적인 예술적 비전을 아우르는 다채로운
          행성입니다.
        </span>
        <span>
          아르플래닛과 함께하는 여정은 언제나 특별합니다. 우리의 공연은 단순한
          음악적 경험을 넘어, 예술의 진정한 가치를 느낄 수 있는 시간이 될
          것입니다. 유일하고 독창적인 빛을 발하는 우리 아르플래닛과 함께, 예술의
          무한한 가능성을 탐험해보세요.
        </span>
      </div>
    </StyledAboutMention>
  );
}

const StyledAboutMention = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  padding: 50px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin-left: 5%;
    padding: 20px;
  }
  .title {
    display: flex;
    flex-direction: column;
    font-size: ${theme.text.size.extralarge};
    font-weight: ${theme.text.weight.medium};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.semithin};
    }
    span {
      margin-top: 10px;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    font-size: ${theme.text.size.large};
    font-weight: ${theme.text.weight.semithin};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.semismall};
      font-weight: ${theme.text.weight.thin};
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
