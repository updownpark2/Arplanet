import styled from "styled-components";
import ArtistPoster from "../components/Artist/ArtistPoster";
import ArtistMention from "../components/Artist/ArtistMetion";
import ArtistIntroduce from "../components/Artist/ArtistIntroduce";
import { useArtists } from "../hooks/useArtists";
import ArtistMeta from "../metadatas/ArtistMeta";

export default function Artist() {
  const { artists } = useArtists();
  return (
    <>
      <ArtistMeta />
      <StyledArtist>
        <ArtistPoster />
        <ArtistMention />
        <ArtistIntroduce artists={artists} />
      </StyledArtist>
    </>
  );
}

const StyledArtist = styled.div``;
