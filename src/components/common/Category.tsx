import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { useState } from "react";

interface Props {
  closeCategory: () => void;
}

export default function Category({ closeCategory }: Props) {
  return (
    <StyledCategory>
      <div className="header">
        <button onClick={closeCategory}>X</button>
      </div>
      <div className="category">
        <span>ABOUT</span>
        <span>ARTIST</span>
        <span>CONCERT</span>
        <span>TICKET</span>
        <span>NEWS</span>
        <span>PARTNERS</span>
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
