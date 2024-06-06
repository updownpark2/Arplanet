import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Concert } from "../../model/concert.model";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

interface Props {
  data: Concert;
}

export default function ConcertDetail() {
  const { data }: Props = useLocation().state;

  return (
    <StyledConcertDetail>
      <div className="box">
        <span className="standard">제목</span>
        <span className="content">{data.title}</span>
      </div>
      <div className="box">
        <span className="standard">공연날짜</span>
        <span className="content">{data.date}</span>
      </div>
      <div className="box">
        <span className="standard">공연장소</span>
        <span className="content">{data.location}</span>
      </div>
      <div className="box">
        <span className="standard">연주자</span>
        {data.artists.slice(0, 4).map((artist) => (
          <span className="content">{artist} </span>
        ))}
        <span className="limit">&lt;최대 4명까지 보여집니다&gt;</span>
      </div>
      <div className="poster">
        <img src={`${S3URL}${data.mainImg}`} />
        {data.subImg[0] !== "" &&
          data.subImg.map((img) => <img src={`${S3URL}${img}`} />)}
      </div>
    </StyledConcertDetail>
  );
}

const StyledConcertDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;

  @media (max-width: ${theme.viewSize.phone}) {
    padding: 30px;
  }
  .box {
    display: flex;
    padding: 10px;
    @media (max-width: ${theme.viewSize.phone}) {
      padding: 5px;
    }
    align-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    .standard {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.medium};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.semismall};
      }
    }
    .content {
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.medium};
      opacity: 0.6;
      margin-left: 20px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
        margin-left: 10px;
      }
    }
  }
  .poster {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${theme.viewSize.phone}) {
      margin-top: 20px;
    }
    img {
      width: 850px;
      object-fit: cover;
      @media (max-width: ${theme.viewSize.phone}) {
        width: 300px;
      }
    }
  }

  .limit {
    font-size: 10px;
    margin-left: 10px;
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: 5px;
    }
  }
`;
