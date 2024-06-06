import styled from "styled-components";
import { theme } from "../../style/theme";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import { S3URL } from "../../utils/S3URL";

export default function Header() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const navigator = useNavigate();
  const openCategory = () => {
    setCategoryOpen(true);
  };
  const closeCategory = () => {
    setCategoryOpen(false);
  };
  const goHome = () => {
    navigator(`/`);
  };

  return (
    <StyledHeader>
      <div className="logo" onClick={goHome}>
        <img src={`${S3URL}arplanet.jpg`} />
        <span>아르플래닛</span>
      </div>
      {categoryOpen && <Category closeCategory={closeCategory} />}
      {!categoryOpen && (
        <div className="category">
          <IoReorderThree onClick={openCategory} />
        </div>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 70px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin: 0 20px;
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 150px;
      height: 150px;
      @media (max-width: ${theme.viewSize.phone}) {
        width: 100px;
        height: 100px;
      }
    }
    span {
      margin-left: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        margin-left: 0px;
      }

      font-weight: ${theme.text.weight.thick};
      font-size: ${theme.text.size.large};
    }
  }

  .category {
    font-size: ${theme.text.size.extralarge};
    svg {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
