import styled from "styled-components";
import { INews } from "../../model/News.model";
import { theme } from "../../style/theme";

interface Props {
  news: INews[];
}

export default function NewsLists({ news }: Props) {
  return (
    <StyledNewsLists>
      <div className="standard">
        <span className="media">미디어</span>
        <span className="title">제목</span>
        <span className="date">날짜</span>
      </div>
      {news.map((data) => (
        <a href={data.url} target="blank">
          <div className="content">
            <span className="media">{data.media}</span>
            <span className="title">{data.title}</span>
            <span className="date">{data.date}</span>
          </div>
        </a>
      ))}
    </StyledNewsLists>
  );
}

const StyledNewsLists = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 10px 20px;
  }
  a {
    text-decoration: none;
  }

  a:link {
    color: black;
  }

  a:visited {
    color: black;
  }

  a:hover {
    color: black;
  }

  a:active {
    color: black;
  }
  a:visited {
    color: black;
  }
  .standard {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid black;
    span {
      padding: 30px 0px;
      font-size: ${theme.text.size.semismall};
      font-weight: ${theme.text.weight.semithin};
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
      }
    }
    .title {
      width: 60%;
    }
    .media {
      width: 20%;
    }
    .date {
      width: 20%;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    border-top: 0.3px solid black;
    @media (max-width: ${theme.viewSize.phone}) {
      padding: 25px 0;
    }
    .title {
      font-size: ${theme.text.size.medium};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
      }
      width: 60%;
      text-align: center;
    }
    .media {
      font-size: ${theme.text.size.semismall};
      width: 20%;
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.verysmall};
      }
    }
    .date {
      font-size: ${theme.text.size.small};
      opacity: 0.7;
      width: 20%;
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.verysmall};
      }
    }
    transition: transform 0.3s ease;
  }
  .content:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
