import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { theme } from "../../style/theme";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <img src="arplanet.jpg" />
        <span>ARPLANET</span>
      </div>
      <div className="sns">
        <FaInstagram />
        <SiNaver />
      </div>
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

  .sns {
    font-size: ${theme.text.size.large};
    svg {
      margin-left: 10px;
    }
  }
`;
