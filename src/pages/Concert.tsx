import styled from "styled-components";
import ConcertHeader from "../components/Concert/ConcertHeader";
import ConcertMention from "../components/Concert/ConcertMention";
import ConcertFilter from "../components/Concert/ConcertFilter";
import { useConcert } from "../hooks/useConcert";
import ConcertPagination from "../components/Concert/ConcertPagination";
import ConcertLists from "../components/Concert/ConcertLists";

export default function Concert() {
  const { concert } = useConcert();

  return (
    <StyledConcert>
      <ConcertHeader />
      <ConcertMention />
      <ConcertFilter />
      {concert && <ConcertLists concert={concert} />}
      <ConcertPagination />
    </StyledConcert>
  );
}

const StyledConcert = styled.div``;
