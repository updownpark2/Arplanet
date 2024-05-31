import styled from "styled-components";
import ArtistPoster from "../components/Artist/ArtistPoster";
import ArtistMention from "../components/Artist/ArtistMetion";
import ArtistIntroduce from "../components/Artist/ArtistIntroduce";

export default function Artist() {
  return (
    <StyledArtist>
      <ArtistPoster />
      <ArtistMention />
      <ArtistIntroduce />
    </StyledArtist>
  );
}

const StyledArtist = styled.div``;
