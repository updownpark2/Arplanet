import styled from "styled-components";
import AboutPoster from "../components/About/AboutPoster";
import AboutMention from "../components/About/AboutMention";
import AboutPlaner from "../components/About/AboutPlaner";
import AboutContact from "../components/About/AboutContact";

export default function About() {
  return (
    <StyledAbout>
      <AboutPoster />
      <AboutMention />
      <AboutPlaner />
      <AboutContact />
    </StyledAbout>
  );
}

const StyledAbout = styled.div``;
