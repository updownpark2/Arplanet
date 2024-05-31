import styled from "styled-components";
import { ArtistsDetailDummy } from "../../utils/ArtistDummy";
import { theme } from "../../style/theme";

export default function ArtistIntroduce() {
  return (
    <StyledArtistIntroduce>
      <div className="artists">
        {ArtistsDetailDummy.map((data, i) => (
          <div className="artist">
            <div className="poster">
              <img src={data.imgUrl} />
            </div>

            <div className="contents">
              <span className="en">{data.en}</span>
              <span className="kr">{data.kr}</span>
              <div className="carrer">
                {data.introduce.map((info) => (
                  <span>{info}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledArtistIntroduce>
  );
}

const StyledArtistIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 10px;
  }
  .artists {
    display: flex;
    flex-direction: column;
    .artist {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 100px;
      @media (max-width: ${theme.viewSize.phone}) {
        margin-bottom: 40px;
      }
      .poster {
        img {
          width: 550px;
          height: 300px;
          object-fit: cover;
          @media (max-width: ${theme.viewSize.phone}) {
            width: 160px;
            height: 110px;
          }
        }
      }

      .contents {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 30%;
        @media (max-width: ${theme.viewSize.phone}) {
          width: 50%;
        }
        .en {
          font-size: ${theme.text.size.medium};
          font-weight: ${theme.text.weight.semithin};
          color: ${theme.color.lightgray};
          @media (max-width: ${theme.viewSize.phone}) {
            font-size: ${theme.text.size.verysmall};
          }
        }
        .kr {
          font-size: ${theme.text.size.large};
          font-weight: ${theme.text.weight.medium};
          margin-top: 5px;
          @media (max-width: ${theme.viewSize.phone}) {
            font-size: ${theme.text.size.small};
          }
        }
        .carrer {
          display: flex;
          flex-direction: column;
          span {
            margin-top: 7px;
            font-size: ${theme.text.size.semismall};
            font-weight: ${theme.text.weight.semithin};
            @media (max-width: ${theme.viewSize.phone}) {
              font-size: ${theme.text.size.verysmall};
              font-weight: ${theme.text.weight.thin};
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
`;
