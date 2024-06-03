import styled from "styled-components";
import AboutPoster from "../components/About/AboutPoster";
import AboutMention from "../components/About/AboutMention";
import AboutPlaner from "../components/About/AboutPlaner";
import AboutContact from "../components/About/AboutContact";
import { useCeo } from "../hooks/useCeo";

export default function About() {
  const { ceoData } = useCeo();

  return (
    <StyledAbout>
      <AboutPoster />
      <AboutMention />
      {ceoData && <AboutPlaner ceoData={ceoData} />}
      <AboutContact />
    </StyledAbout>
  );
}

const StyledAbout = styled.div``;
