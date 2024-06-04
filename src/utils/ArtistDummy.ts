import { S3URL } from "./S3URL";
/*
export interface IArtistInfo {
  en: string;
  kr: string;
  introduce: string[];
  imgUrl: string;
}

export const ArtistsDummy: IArtistInfo[] = [
  {
    en: "CHOI HYE JI",
    kr: "최혜지",
    introduce: [
      "예술단체 Arplanet 아르플래닛 대표",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 음악학과 피아노전공 석사과정 재학",
    ],
    imgUrl: `${S3URL}0.jpeg`,
  },
  {
    en: "KIM MIN HO",
    kr: "김민호",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 음악학과 피아노전공 석사과정 재학",
    ],
    imgUrl: `${S3URL}1.jpeg`,
  },
  {
    en: "KIM SE YEON",
    kr: "김세연",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "국립순천대학교 피아노학과 수석졸업",
      "서울시립대학교 대학원 음악학과 피아노전공 석사과정 졸업",
    ],
    imgUrl: `${S3URL}2.jpeg`,
  },
  {
    en: "KIM YE BON",
    kr: "김예본",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 관현악전공 졸업",
    ],
    imgUrl: `${S3URL}3.jpeg`,
  },
  {
    en: "BAEK GYE JUN",
    kr: "백계준",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 예술대학 음악학과 피아노전공 석사과정 졸업",
    ],
    imgUrl: `${S3URL}4.jpeg`,
  },
  {
    en: "YANG DA WON",
    kr: "양다원",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
    ],
    imgUrl: `${S3URL}5.jpeg`,
  },
  {
    en: "YU YE REUM",
    kr: "유예름",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
    ],
    imgUrl: `${S3URL}6.jpeg`,
  },
  {
    en: "JEONG CHE EUN",
    kr: "정채은",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 예술대학 음악학과 피아노전공 석사과정 재학",
    ],
    imgUrl: `${S3URL}7.jpeg`,
  },
];

export const ArtistsDetailDummy: IArtistInfo[] = [
  {
    en: "KIM MIN HO",
    kr: "김민호",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 음악학과 피아노전공 석사과정 재학",
      "2018 한량뮤직 콩쿠르 3위 ",
      "제20회 광신대학교 콩쿠르 1위 ",
      "2023 Remember Artist 예술가를 기억하다. 출연",
      "2024 Lieto piano concert 출연",
    ],
    imgUrl: `${S3URL}0ar.jpg`,
  },
  {
    en: "KIM SE YEON",
    kr: "김세연",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "국립순천대학교 피아노학과 수석졸업",
      "서울시립대학교 대학원 음악학과 피아노전공 석사과정 졸업",
      "순천대학교 피아노학과 정기연주회, 테마연주회 다수 출연",
      "순천대학교 피아노학과 협주곡의 밤 카메라타전남 오케스트라 협연",
      "서울국제교류음악센터, 어뮤즈사운드(숨아트리움), 아울러서(끌레르아트홀) 등 다수의 기획독주",
      "국립순천대 70주년 기념관,서울시립대 UOS 아트홀,  순천문화예술회관, 북서울꿈의숲아트센터 등 다수의 연주회 출연",
      "2024 Lieto piano concert 출연",
    ],
    imgUrl: `${S3URL}1ar.jpg`,
  },
  {
    en: "KIM YE BON",
    kr: "김예본",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 관현악전공 졸업",
      "전남대학교 현악정기연주회 협연",
      "아시아 음악페스티벌 독주",
      "카메라타 전남 오케스트라 객원 연주",
    ],
    imgUrl: `${S3URL}2ar.jpg`,
  },
  {
    en: "BAEK GYE JUN",
    kr: "백계준",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 예술대학 음악학과 피아노전공 석사과정 졸업",
      "전남대학교 정기연주회 협연",
      "음악교육신문사 콩쿠르 일반부 2등",
      "제 1회 김태현 피아노 콩쿠르 1등",
      "호남예술제 피아노부문 최고상",
      "제 7회 금호주니어콘서트 독주회",
    ],
    imgUrl: `${S3URL}3ar.jpg`,
  },
  {
    en: "YANG DA WON",
    kr: "양다원",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 제 10회 낭만 피아노 음악의 밤 출연",
      "제1회 베아투스 앙상블 정기연주회 출연",
    ],
    imgUrl: `${S3URL}4ar.jpg`,
  },
  {
    en: "YU YE REUM",
    kr: "유예름",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 제 12회 낭만 피아노 음악의 밤 출연",
      "2024 Lieto piano concert 출연",
    ],
    imgUrl: `${S3URL}5ar.jpg`,
  },
  {
    en: "JEONG CHE EUN",
    kr: "정채은",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 예술대학 음악학과 피아노전공 석사과정 재학",
      "2024 Lieto piano concert 출연",
    ],
    imgUrl: `${S3URL}6ar.jpg`,
  },
];
*/
