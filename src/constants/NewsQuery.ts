interface IQUERYSTRING {
  SORT: "ASC" | "DESC";
  PAGE: string;
}

export const NEWS_QUERYSTRING_KEY = {
  SORT: "sort",
  PAGE: "page",
};

export const NEWS_QUERYSTRING_VALUE: IQUERYSTRING = {
  SORT: "DESC",
  PAGE: "1",
};
