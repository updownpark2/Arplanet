import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import { theme } from "../../style/theme";

export default function ArtistSlider() {
  return (
    <StyledArtistSlider>
      <div className="slider-title">
        <span className="slider-intro">
          아르플래닛은 최고의 아티스트와 함께합니다.
        </span>
        <span className="slider-artist">Meet The Artists</span>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        grabCursor={true}
        scrollbar={{ hide: false }}
        modules={[Scrollbar, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          800: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src="1.jpeg" />
          <div className="introduction">
            <span className="en">CHOI HYE JI</span>
            <span className="kr">최혜지</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="2.jpeg" />
          <div className="introduction">
            <span className="en">BAEK GYE JUN</span>
            <span className="kr">백계준</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="3.jpeg" />
          <div className="introduction">
            <span className="en">JEONG CHE EUN</span>
            <span className="kr">정채은</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="4.jpeg" />
          <div className="introduction">
            <span className="en">YU YE REUM</span>
            <span className="kr">유예름</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="5.jpeg" />
          <div className="introduction">
            <span className="en">KIM SE YEON</span>
            <span className="kr">김세연</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="6.jpeg" />
          <div className="introduction">
            <span className="en">YANG DA WON</span>
            <span className="kr">양다원</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="7.jpeg" />
          <div className="introduction">
            <span className="en">KIM MIN HO</span>
            <span className="kr">김민호</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="8.jpeg" />
          <div className="introduction">
            <span></span>
            <span className="en">KIM YE BON</span>
            <span className="kr">김예본</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledArtistSlider>
  );
}

const StyledArtistSlider = styled.div`
  width: 100%;
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
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.thick};
      margin-top: 10px;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
      }
    }
  }
  .swiper-slide {
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
