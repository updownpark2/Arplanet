interface IQUERYSTRING {
  YEAR: "all" | "2024" | "2023";
  STATUS: "all" | "proceeding" | "ended";
  PLAN: "all" | "individual" | "team";
  PAGE: string;
  SORT: "ASC" | "DESC";
}

export const CONCERT_QUERYSTRING_KEY = {
  YEAR: "year",
  STATUS: "status",
  PLAN: "plan",
  PAGE: "page",
  SORT: "sort",
};

export const CONCERT_QUERYSTRING_VALUE: IQUERYSTRING = {
  YEAR: "all",
  STATUS: "all",
  PLAN: "all",
  PAGE: "1",
  SORT: "DESC",
};
