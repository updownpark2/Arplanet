import styled from "styled-components";
import { CEO } from "../../model/ceo.model";
import { S3URL } from "../../utils/S3URL";
import { theme } from "../../style/theme";

interface Props {
  ceoData: CEO;
}

export default function CEOIntroduce({ ceoData }: Props) {
  return (
    <StyledCEOIntroduce>
      <div className="planner">
        <img src={`${S3URL}capibara-1.jpeg`} />
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
          {ceoData.info.map((data) => (
            <span>{data}</span>
          ))}
        </div>
        <div className="content">
          <span className="subtitle">학력</span>
          {ceoData.edu.map((data) => (
            <span>{data}</span>
          ))}
        </div>
        <div className="content">
          <span className="subtitle">교육/수상</span>
          {ceoData.awards.map((data) => (
            <span>{data}</span>
          ))}
        </div>
        <div className="content">
          <span className="subtitle">연주경력</span>
          {ceoData.carrer.map((data) => (
            <span>{data}</span>
          ))}
        </div>
        <div className="content">
          <span className="subtitle">기획/연출</span>
          {ceoData.performance.map((data) => (
            <span>{data}</span>
          ))}
        </div>
      </div>
    </StyledCEOIntroduce>
  );
}

const StyledCEOIntroduce = styled.div`
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
        font-weight: ${theme.text.weight.semithin};
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
      span {
        margin-top: 3px;
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
