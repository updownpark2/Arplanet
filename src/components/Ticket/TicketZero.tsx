import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";

interface Props {
  closeCard: () => void;
}

export default function TicketZero({ closeCard }: Props) {
  return (
    <StyledTicketZero>
      <div className="nav">
        <button type="button" onClick={closeCard}>
          X
        </button>
      </div>
      <div className="contents">
        <div className="title">
          <span>티켓 서비스를 제공하지 않는 공연</span>
        </div>
        <div className="content">
          해당 공연은 공연 시작 일주일 전
          <br />
          062-670-7942로 유선예약만 가능합니다.
        </div>
      </div>
    </StyledTicketZero>
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
const StyledTicketZero = styled.div`
  width: 30%;
  height: 40%;
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
    height: 30%;
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
  .contents {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
    @media (max-width: ${theme.viewSize.phone}) {
      padding: 20px;
    }
    height: 40%;
    @media (max-width: ${theme.viewSize.phone}) {
      height: 30%;
    }
    .title {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.medium};
      margin-top: 5px;
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
      }
    }
    .content {
      @media (max-width: ${theme.viewSize.phone}) {
        margin: 20px 20px 20px 28px;
      }
      text-align: center;
      margin-top: 5px;
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.semithin};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.semismall};
      }
    }
  }
`;
