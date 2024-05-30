import styled from "styled-components";
import { theme } from "../../style/theme";

export default function ArplanetAbout() {
  return (
    <StyledArplanetAbout>
      <img src="minho.jpg" />
      <div className="mention">
        <span>공연의 예술, ARPLANET에서 시작됩니다.</span>
        <button>ABOUT</button>
      </div>
    </StyledArplanetAbout>
  );
}

const StyledArplanetAbout = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: transform 0.3s ease;
    @media (max-width: ${theme.viewSize.phone}) {
      height: 200px;
    }
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
  }
  .mention {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    z-index: 999;
    color: ${theme.color.white};
    font-weight: ${theme.text.weight.medium};
    font-size: ${theme.text.size.extralarge};
    @media (max-width: ${theme.viewSize.phone}) {
      left: 60%;
      font-weight: ${theme.text.weight.medium};
      font-size: ${theme.text.size.semismall};
    }
    display: flex;
    flex-direction: column;
    button {
      margin-top: 20px;
      width: fit-content;
      font-size: ${theme.text.size.semismall};
      background-color: ${theme.color.white};
      padding: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        margin-top: 10px;
        font-size: ${theme.text.size.small};
        padding: 5px;
      }
      border: none;
    }
  }
`;
