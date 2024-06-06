import { Helmet } from "react-helmet-async";

export default function HomeMeta() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="아르플래닛 - 광주 청년 아티스트들의 클래식 연주 홈 페이지"
      />
      <meta
        property="og:description"
        content="아르플래닛은 광주 지역의 청년 아티스트들이 모여 클래식을 연주하는 클래식 기획 회사입니다. 이 페이지에서는 아르플래닛의 다양한 연주자들과 전체적인 이미지를 확인할 수 있습니다"
      />
      <meta property="og:url" content="https://arplanet.co.kr" />
    </Helmet>
  );
}
