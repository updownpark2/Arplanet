import { Helmet } from "react-helmet-async";

export default function NewsMeta() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="아르플래닛 - 광주 청년 아티스트들의 클래식 연주 단체의 뉴스에 대한 정보를 담고 있습니다."
      />
      <meta
        property="og:description"
        content="아르플래닛의 다양한 뉴스를 발견할 수 있습니다. 무등일보, 헤럴드경제 등 다양한 미디어에서의 아르플래닛에 대한 기사를 확인할 수 있습니다."
      />
      <meta property="og:url" content="https://arplanet.co.kr/news" />
    </Helmet>
  );
}
