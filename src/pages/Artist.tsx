import styled from "styled-components";
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
        <ArtistMention />
        <ArtistIntroduce artists={artists} />
      </StyledArtist>
    </>
  );
}

const StyledArtist = styled.div``;
