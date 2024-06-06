import styled from "styled-components";
import { theme } from "../../style/theme";

export default function TicketMention() {
  return (
    <StyledTicketMention>
      <div className="title">
        <span>아르플래닛 티켓 예매</span>
      </div>
    </StyledTicketMention>
  );
}

const StyledTicketMention = styled.div`
  display: flex;
  flex-direction: column;

  padding: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 20px;
  }
  .title {
    display: flex;
    flex-direction: column;
    font-size: ${theme.text.size.extralarge};
    font-weight: ${theme.text.weight.thick};
    @media (max-width: ${theme.viewSize.phone}) {
      font-size: ${theme.text.size.large};
    }
  }
`;
