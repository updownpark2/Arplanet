import { Helmet } from "react-helmet-async";

export default function TicketMeta() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="아르플래닛 - 광주 청년 아티스트들의 클래식 연주 단체의 공연을 예약할 수 있는 페이지"
      />
      <meta
        property="og:description"
        content="현재 진행중인 아르플래닛의 공연을 예매할 수 있는 페이지 입니다."
      />
      <meta property="og:url" content="https://arplanet.co.kr/ticket" />
    </Helmet>
  );
}
