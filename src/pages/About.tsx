import styled from "styled-components";
import AboutPoster from "../components/About/AboutPoster";
import AboutMention from "../components/About/AboutMention";
import AboutPlaner from "../components/About/AboutPlaner";
import AboutContact from "../components/About/AboutContact";
import { useCeo } from "../hooks/useCeo";
import AboutMeta from "../metadatas/AboutMeta";

export default function About() {
  const { ceoData } = useCeo();

  return (
    <>
      <AboutMeta />
      <StyledAbout>
        <AboutPoster />
        <AboutMention />
        {ceoData && <AboutPlaner ceoData={ceoData} />}
        <AboutContact />
      </StyledAbout>
    </>
  );
}

const StyledAbout = styled.div``;
