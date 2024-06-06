import { Helmet } from "react-helmet-async";

export default function ArtistMeta() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="아르플래닛 - 광주 청년 아티스트들의 클래식 연주 단체의 다양한 연주자들에 대한 정보"
      />
      <meta
        property="og:description"
        content="아르플래닛은 광주 지역의 청년 아티스트들이 모여 클래식을 연주하는 클래식 기획 회사입니다. 백계준, 김민호 등 다양한 연주자들에 대한 정보를 담고 있습니다. 특히 아르플래닛의 전체 연주자들에 대한 정보를 담고 있습니다."
      />
      <meta property="og:url" content="https://arplanet.co.kr/artist" />
    </Helmet>
  );
}
