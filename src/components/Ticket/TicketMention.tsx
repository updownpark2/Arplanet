import styled from "styled-components";
import { theme } from "../../style/theme";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { CONCERT_QUERYSTRING_KEY } from "../../constants/ConcertQuery";
import { showPlanFormatter } from "../../utils/foramtter";

export default function TicketMention() {
  const [searchParams, setSearchParams] = useSearchParams();
  const plan = searchParams.get(CONCERT_QUERYSTRING_KEY.PLAN);

  return (
    <StyledTicketMention>
      <div className="title">
        {plan && <span>{showPlanFormatter(plan)}</span>}
      </div>
    </StyledTicketMention>
  );
}

const StyledTicketMention = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 100px;
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
