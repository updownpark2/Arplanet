import { Helmet } from "react-helmet-async";

export default function ConcertMeta() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="아르플래닛 - 광주 청년 아티스트들의 클래식 연주 단체의 다양한 공연에 대한 정보"
      />
      <meta
        property="og:description"
        content="아르플래닛의 다양한 공연에 대한 정보를 확인할 수 있습니다. 아르플래닛 주최/주관 공연과 기획자 최혜지의 개인프로젝트의 공연을 확인할 수 있습니다."
      />
      <meta property="og:url" content="https://arplanet.co.kr/concert" />
    </Helmet>
  );
}
