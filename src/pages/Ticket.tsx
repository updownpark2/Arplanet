import styled from "styled-components";
import { useTicket } from "../hooks/useTicket";
import TicketPoster from "../components/Ticket/TicketPoster";
import TicketMention from "../components/Ticket/TicketMention";
import TicketLists from "../components/Ticket/TicketLists";
import { useState } from "react";
import TicketZero from "../components/Ticket/TicketZero";
import TicketMeta from "../metadatas/TicketMeta";
import TicketFilter from "../components/Ticket/TicketFilter";

export default function Ticket() {
  const { ticket } = useTicket();
  console.log(ticket);
  const [open, setOpen] = useState(false);
  const closeCard = () => {
    setOpen(false);
  };
  const openCard = () => {
    setOpen(true);
  };
  return (
    <>
      <TicketMeta />
      <StyledTicket>
        {open && <TicketZero closeCard={closeCard} />}
        <TicketPoster />
        <TicketFilter />
        <TicketMention />
        {ticket && <TicketLists ticket={ticket} openCard={openCard} />}
      </StyledTicket>
    </>
  );
}

const StyledTicket = styled.div`
  position: relative;
  height: 100%;
`;
