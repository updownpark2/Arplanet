export interface IArtistInfo {
  en: string;
  kr: string;
  introduce: string[];
  imgUrl: string;
}

interface IArtistName {
  en: string;
  kr: string;
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
    imgUrl: "1.jpeg",
  },
  {
    en: "BAEK GYE JUN",
    kr: "백계준",
    introduce: ["전남대학교", "피아노 대회 2등", "연주자"],
    imgUrl: "2.jpeg",
  },
  {
    en: "JEONG CHE EUN",
    kr: "정채은",
    introduce: ["전남대학교", "피아노대회3등", "연주자"],
    imgUrl: "3.jpeg",
  },
  {
    en: "YU YE REUM",
    kr: "유예름",
    introduce: ["전남대학교", "피아노대회4등", "연주자"],
    imgUrl: "4.jpeg",
  },
  {
    en: "KIM SE YEON",
    kr: "김세연",
    introduce: ["전남대학교", "피아노대회5등", "연주자"],
    imgUrl: "5.jpeg",
  },
  {
    en: "YANG DA WON",
    kr: "양다원",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "연주자",
    ],
    imgUrl: "6.jpeg",
  },
  {
    en: "KIM MIN HO",
    kr: "김민호",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 피아노전공 졸업",
      "전남대학교 일반대학원 음악학과 피아노전공 석사과정 재학",
    ],
    imgUrl: "7.jpeg",
  },
  {
    en: "KIM YE BON",
    kr: "김예본",
    introduce: [
      "Arplanet 아르플래닛 소속 아티스트",
      "전남대학교 예술대학 음악학과 관현악전공 졸업",
    ],
    imgUrl: "8.jpeg",
  },
];

export const ArtistsNameDummy: IArtistName[] = [
  { en: "CHOI HYE JI", kr: "최혜지" },
  { en: "BAEK GYE JUN", kr: "백계준" },
  { en: "JEONG CHE EUN", kr: "정채은" },
  { en: "YU YE REUM", kr: "유예름" },
  { en: "KIM SE YEON", kr: "김세연" },
  { en: "YANG DA WON", kr: "양다원" },
  { en: "KIM MIN HO", kr: "김민호" },
  { en: "KIM YE BON", kr: "김예본" },
];
