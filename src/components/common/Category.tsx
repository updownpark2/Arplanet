import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";

interface Props {
  closeCategory: () => void;
}

export default function Category({ closeCategory }: Props) {
  const navigator = useNavigate();
  const goCEO = () => {
    navigator(`/ceo`);
    closeCategory();
  };
  const goAbout = () => {
    navigator(`/about`);
    closeCategory();
  };
  const goArtist = () => {
    navigator(`/artist`);
    closeCategory();
  };
  const goConcert = () => {
    navigator(`/concert`);
    closeCategory();
  };
  const goNews = () => {
    navigator(`/news`);
    closeCategory();
  };
  const goTicket = () => {
    navigator(`/ticket`);
    closeCategory();
  };

  return (
    <StyledCategory>
      <div className="header">
        <button onClick={closeCategory}>X</button>
      </div>
      <div className="category">
        <span onClick={goCEO}>CEO</span>
        <span onClick={goAbout}>ABOUT</span>
        <span onClick={goArtist}>ARTIST</span>
        <span onClick={goConcert}>CONCERT</span>
        <span onClick={goNews}>NEWS</span>
        <span onClick={goTicket}>TICKET</span>
      </div>
    </StyledCategory>
  );
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 0.8;
  
  
  
    }
`;

const StyledCategory = styled.div`
  position: fixed;
  right: 0;
  width: 20%;
  top: 0px;
  bottom: 0px;
  z-index: 999;
  opacity: 0.8;
  right: 0;
  background-color: ${theme.color.lightgray};

  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  @media (max-width: ${theme.viewSize.phone}) {
    width: 40%;
  }
  .header {
    display: flex;
    justify-content: end;
    button {
      margin-top: 10px;
      margin-right: 10px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      background-color: ${theme.color.lightgray};
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.thick};
      color: ${theme.color.black};
      cursor: pointer;
    }
  }
  .category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      margin-top: 20px;
      margin-left: 5px;
      font-size: ${theme.text.size.extralarge};
      font-weight: ${theme.text.weight.thick};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
      }
      cursor: pointer;
    }
    span:hover {
      transform: scale(1.05);
    }
  }
`;
