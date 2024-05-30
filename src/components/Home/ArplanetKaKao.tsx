import { useEffect } from "react";
import styled from "styled-components";

export default function ArplanetKaKao() {
  const addKakaoChannel = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      const isLargeScreen = window.matchMedia("(min-width: 800px)").matches;
      kakao.Channel.createAddChannelButton({
        container: "#kakao-talk-channel-add-button",
        channelPublicId: "_xcPpLG", //카카오 채널 ID
        size: isLargeScreen ? "large" : "small",
        supportMultipleDensities: true,
      });
    }
  };

  useEffect(() => {
    addKakaoChannel();
  }, []);

  return (
    <StyledArplanetKaKao>
      <div id="kakao-talk-channel-add-button"></div>
    </StyledArplanetKaKao>
  );
}

const StyledArplanetKaKao = styled.div`
  text-align: end;
  margin-right: 20px;
  margin-bottom: 20px;
`;
