import styled from "styled-components";
import AboutPoster from "../components/About/AboutPoster";
import AboutMention from "../components/About/AboutMention";

import AboutContact from "../components/About/AboutContact";
import AboutMeta from "../metadatas/AboutMeta";

export default function About() {
  return (
    <>
      <AboutMeta />
      <StyledAbout>
        <AboutPoster />
        <AboutMention />
        <AboutContact />
      </StyledAbout>
    </>
  );
}

const StyledAbout = styled.div``;
