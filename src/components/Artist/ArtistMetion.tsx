import styled from "styled-components";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

export default function ArtistMention() {
  return (
    <StyledArtistMention>
      <div className="poster">
        <img src={`${S3URL}artistPoster.jpg`} />
      </div>
      <div className="mention">
        <div className="title">
          <span>아르플래닛 소속 아티스트</span>
        </div>
        <div className="contents">
          <span>
            아르플래닛의 연주자들은 예술적 열정과 뛰어난 실력을 겸비한 클래식
            음악의 주역들입니다. 각각의 연주자는 고유한 예술적 개성과 깊이를
            지니고 있으며,
          </span>
          <span>
            그들의 음악은 청중에게 감동과 영감을 선사합니다. 아르플래닛은 이러한
            뛰어난 연주자들이 모여 하나의 조화를 이루며, 클래식 음악의
            아름다움을 전파하는 특별한 무대입니다.
          </span>
          <span>
            아르플래닛의 연주자들은 음악을 통해 이야기하고, 그 이야기 속에서
            관객과 함께 호흡합니다. 그들의 연주는 단순한 공연을 넘어, 예술적
            교감을 나누는 소중한 시간입니다. 우리는 이들의 음악이 여러분의 삶에
            특별한 순간과 잊지 못할 감동을 선사할 것이라고 확신합니다.
          </span>
          <span>
            아르플래닛과 함께하는 여정에서, 이 놀라운 연주자들을 만나보세요.
            그들의 음악이 여러분의 마음에 울림을 주고, 예술의 세계로 안내할
            것입니다.
          </span>
        </div>
      </div>
    </StyledArtistMention>
  );
}

const StyledArtistMention = styled.div`
  padding: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 0px;
  }
  display: flex;
  @media (max-width: ${theme.viewSize.phone}) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;

  .poster {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 40%;
    @media (max-width: ${theme.viewSize.phone}) {
      width: 100%;
    }
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
  .mention {
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: ${theme.viewSize.phone}) {
      width: 100%;
      margin-top: 30px;
    }

    .contents {
      display: flex;
      flex-direction: column;
      @media (max-width: ${theme.viewSize.phone}) {
        padding: 20px;
      }
      span {
        margin-bottom: 15px;
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.semithin};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.semismall};
          font-weight: ${theme.text.weight.semithin};
        }
      }
    }
  }
  .title {
    font-size: ${theme.text.size.extralarge};
    font-weight: ${theme.text.weight.thick};
    margin-bottom: 50px;
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.large};
      margin-bottom: 0px;
      padding: 20px;
    }
  }
`;
