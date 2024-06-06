import styled from "styled-components";
import { useTicket } from "../hooks/useTicket";
import TicketPoster from "../components/Ticket/TicketPoster";
import TicketMention from "../components/Ticket/TicketMention";
import TicketLists from "../components/Ticket/TicketLists";
import { useState } from "react";
import TicketZero from "../components/Ticket/TicketZero";

export default function Ticket() {
  const { ticket } = useTicket();
  const [open, setOpen] = useState(false);
  const closeCard = () => {
    setOpen(false);
  };
  const openCard = () => {
    setOpen(true);
  };
  return (
    <StyledTicket>
      {open && <TicketZero closeCard={closeCard} />}
      <TicketPoster />
      <TicketMention />
      {ticket && <TicketLists ticket={ticket} openCard={openCard} />}
    </StyledTicket>
  );
}

const StyledTicket = styled.div`
  position: relative;
  height: 100%;
`;
