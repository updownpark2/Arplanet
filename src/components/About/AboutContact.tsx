import styled from "styled-components";
import { theme } from "../../style/theme";
import { S3URL } from "../../utils/S3URL";

export default function AboutContact() {
  return (
    <StyledAboutContact>
      <div className="contents">
        <div className="title">
          <span>CONTACT</span>
        </div>
        <div className="phone">
          <span className="subtitle">PHONE</span>
          <span className="information">070-8983-8419</span>
        </div>
        <div className="email">
          <span className="subtitle">E-MAIL</span>
          <span className="information">arplanet24@naver.com</span>
        </div>

        <div className="address">
          <span className="subtitle">ADDRESS</span>
          <span className="information">
            광주광역시 북구 대자로 46, 3F 146호
          </span>
        </div>
      </div>
      <div className="poster">
        <img src={`${S3URL}contact-1.jpeg`} />
      </div>
    </StyledAboutContact>
  );
}

const StyledAboutContact = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10%;
  padding: 50px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin-left: 5%;
    padding: 20px;
  }
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .title {
      font-size: ${theme.text.size.extralarge};
      margin-bottom: 30px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.large};
        margin-bottom: 15px;
      }
    }
    .phone {
      display: flex;
      flex-direction: column;
      .subtitle {
        margin-top: 10px;
        font-size: ${theme.text.size.large};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
        }
      }
      .information {
        margin-top: 6px;
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.semithin};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.small};
        }
      }
    }
    .email {
      display: flex;
      flex-direction: column;
      .subtitle {
        margin-top: 10px;
        font-size: ${theme.text.size.large};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
        }
      }
      .information {
        margin-top: 6px;
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.semithin};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.small};
        }
      }
    }
    .address {
      display: flex;
      flex-direction: column;
      .subtitle {
        margin-top: 10px;
        font-size: ${theme.text.size.large};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
        }
      }
      .information {
        margin-top: 6px;
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.semithin};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.small};
        }
      }
    }

    .kakao {
      display: flex;
      flex-direction: column;
      .subtitle {
        margin-top: 10px;
        font-size: ${theme.text.size.large};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
        }
      }
      .information {
        margin-top: 6px;
        font-size: ${theme.text.size.semismall};
        font-weight: ${theme.text.weight.semithin};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.small};
        }
      }
    }
  }
  .poster {
    width: 40%;
    @media (max-width: ${theme.viewSize.phone}) {
      width: 30%;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
