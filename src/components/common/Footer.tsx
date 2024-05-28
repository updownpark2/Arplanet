import styled from "styled-components";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { theme } from "../../style/theme";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="information">
        <div className="title">ARPLANET</div>
        <div className="ceo">최혜지</div>
        <div className="location">
          <span>광주광역시 북구 대자로 46, 3F 146호</span>
          <span>07089838419</span>
          <span>
            <CiMail /> arplanet24@naver.com
          </span>
        </div>
        <div className="copyright">
          ⓒ ARPLANET. all rights reserved. degined & developed by UPDOWN.
        </div>
      </div>
      <div className="etc">
        <div className="news">
          <button>NEWS</button>
        </div>
        <div className="sns">
          <FaInstagram />
          <SiNaver />
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.color.darkgray};
  color: ${theme.color.white};
  width: 100%;

  padding: 30px 0;
  .information {
    div {
      margin-top: 20px;
    }
    .title {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.thick};
    }
    .ceo {
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.thin};
    }
    .location {
      font-size: ${theme.text.size.small};
      font-weight: ${theme.text.weight.thin};
      display: flex;
      flex-direction: column;
      span {
        margin-top: 3px;
      }
    }
    .copyright {
      font-size: ${theme.text.size.small};
      font-weight: ${theme.text.weight.thin};
      color: ${theme.color.gray};
    }
  }
  .etc {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: ${theme.text.size.medium};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.small};
    }
    .news {
      button {
        padding: 10px 15px;
        color: ${theme.color.white};
        background-color: ${theme.color.black};
        border: none;
        border-radius: 10px;
      }
    }
    .sns {
      svg {
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
        }
        margin-left: 10px;
      }
    }
  }
`;
