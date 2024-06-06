import { Helmet } from "react-helmet-async";

export default function AboutMeta() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="아르플래닛 - 광주 청년 아티스트들의 클래식 연주 단체의 자세한 정보를 알 수 있는 페이지"
      />
      <meta
        property="og:description"
        content="아르플래닛은 광주 지역의 청년 아티스트들이 모여 클래식을 연주하는 클래식 기획 회사입니다. 기획자 최혜지에 대한 정보와 아르플래닛의 연혁, 역사가 담겨있는 페이지"
      />
      <meta property="og:url" content="https://arplanet.co.kr/about" />
    </Helmet>
  );
}
