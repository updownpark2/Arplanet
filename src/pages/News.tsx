import styled from "styled-components";
import NewsPoster from "../components/News/NewsPoster";
import NewsFilter from "../components/News/NewsFilter";
import NewsPagination from "../components/News/NewsPagination";
import { useNews } from "../hooks/useNews";
import NewsLists from "../components/News/NewsLists";
import NewsMention from "../components/News/NewsMention";

export default function News() {
  const { news } = useNews();

  return (
    <StyledNews>
      <NewsPoster />
      <NewsMention />
      <NewsFilter />
      {news && <NewsLists news={news} />}
      <NewsPagination />
    </StyledNews>
  );
}

const StyledNews = styled.div``;
