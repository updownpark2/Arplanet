import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import { theme } from "../../style/theme";
import { Artists } from "../../model/artists.model";

interface Props {
  openCard: () => void;
  handleCardIndex: (i: number) => void;
  artists: Artists[];
}

export default function ArtistSlider({
  openCard,
  handleCardIndex,
  artists,
}: Props) {
  const handleClickArtist = (i: number) => {
    openCard();
    handleCardIndex(i);
  };

  return (
    <StyledArtistSlider>
      <div className="slider-title">
        <span className="slider-intro">
          아르플래닛은 Artist+Planet의 브랜드명입니다.
        </span>
        <span className="slider-artist">Our Artist</span>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        grabCursor={true}
        scrollbar={{ hide: false }}
        modules={[Scrollbar, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          800: {
            slidesPerView: 4,
          },
        }}
      >
        {artists.map((artist, i) => (
          <SwiperSlide>
            <img
              src={`${process.env.REACT_APP_S3_URL}${artist.SimgUrl}`}
              onClick={() => handleClickArtist(i)}
            />
            <div className="introduction">
              <div className="en">{artist.en}</div>
              <div className="kr">{artist.kr}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledArtistSlider>
  );
}

const StyledArtistSlider = styled.div`
  width: 100%;
  margin-bottom: 15px;
  .slider-title {
    display: flex;
    flex-direction: column;
    margin-left: 25%;
    @media (max-width: ${theme.viewSize.phone}) {
      margin-left: 5%;
    }
    .slider-intro {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.thin};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
      }
    }
    .slider-artist {
      font-size: ${theme.text.size.large};
      font-weight: ${theme.text.weight.thick};
      margin-top: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
      }
    }
  }
  .swiper-slide {
    margin-top: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 19%;
    @media (max-width: ${theme.viewSize.phone}) {
      width: 50%;
    }
    img {
      width: 100%;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.05);
    }
    .introduction {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .en {
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.semithin};
        color: ${theme.color.lightgray};
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.small};
        }
      }
      .kr {
        font-size: ${theme.text.size.large};
        font-weight: ${theme.text.weight.medium};
        margin-top: 5px;
        @media (max-width: ${theme.viewSize.phone}) {
          font-size: ${theme.text.size.medium};
        }
      }
    }
  }
  .swiper-scrollbar .swiper-scrollbar-drag {
    cursor: pointer;
    margin-top: 30px;
    background-color: gray;
    width: 2px;
    height: 3px;
  }
`;
