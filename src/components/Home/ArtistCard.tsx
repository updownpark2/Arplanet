import styled, { keyframes } from "styled-components";
import { IArtistInfo } from "../../utils/ArtistDummy";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";
import { Artists } from "../../model/artists.model";

interface Props {
  closeCard: () => void;
  cardInfo: Artists;
}

export default function ArtistCard({ closeCard, cardInfo }: Props) {
  const navigator = useNavigate();
  const goArtist = () => {
    navigator(`/artist`);
  };

  return (
    <StyledArtistCard>
      <div className="nav">
        <button type="button" onClick={closeCard}>
          X
        </button>
      </div>
      <div className="title">
        <img src={`${process.env.REACT_APP_S3_URL}${cardInfo.SimgUrl}`} />
        <div className="name">
          <div className="en">{cardInfo.en}</div>
          <div className="kr">{cardInfo.kr}</div>
        </div>
      </div>
      <div className="contents">
        {cardInfo.edu.map((info, i) => (
          <span key={i}>{info}</span>
        ))}
      </div>
      <div className="more">
        <button onClick={goArtist}>+ MORE</button>
      </div>
    </StyledArtistCard>
  );
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const StyledArtistCard = styled.div`
  width: 30%;
  height: 70%;
  z-index: 999;
  border-radius: 10px;
  position: absolute;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  background-color: ${theme.color.white};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  @media (max-width: ${theme.viewSize.phone}) {
    width: 80%;
    height: 50%;
  }
  .nav {
    display: flex;
    justify-content: end;
    button {
      margin-top: 10px;
      margin-right: 10px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      background-color: white;
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.thick};
      cursor: pointer;
    }
  }
  .title {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    height: 40%;
    @media (max-width: ${theme.viewSize.phone}) {
      height: 30%;
    }
    img {
      object-fit: fill;
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
  }
  .contents {
    display: flex;
    flex-direction: column;
    margin: 32px 32px 32px 40px;
    @media (max-width: ${theme.viewSize.phone}) {
      margin: 20px 20px 20px 28px;
    }
    span {
      margin-top: 5px;
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.semithin};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.semismall};
      }
    }
  }
  .more {
    text-align: center;
    button {
      background-color: ${theme.color.white};
      border: none;
      font-weight: ${theme.text.weight.medium};
      font-size: ${theme.text.size.medium};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.semismall};
        margin-top: 20px;
      }

      transition: transform 0.3s ease;
      cursor: pointer;
    }
    button:hover {
      transform: scale(1.1);
    }
  }
`;
