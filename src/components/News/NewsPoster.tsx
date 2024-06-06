import styled from "styled-components";
import { S3URL } from "../../utils/S3URL";
import { theme } from "../../style/theme";

export default function NewsPoster() {
  return (
    <StyledNewsPoster>
      <img src={`${S3URL}contact-1.jpeg`} />
    </StyledNewsPoster>
  );
}

const StyledNewsPoster = styled.div`
  margin: 50px 0;
  height: 400px;
  @media (max-width: ${theme.viewSize.phone}) {
    margin: 30px 0;
    height: 200px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
