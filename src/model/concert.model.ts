export interface FetchConcertResponse {
  year: string;
  plan: string;
  status: string;
  page: string;
  sort: string;
}

export interface IConcertTotal {
  total: number;
}

export interface Concert {
  _id: string;
  title: string;
  date: string;
  location: string;
  mainImg: string;
  subImg: string[];
  plan: string;
  year: string;
  artists: string[];
  ticketUrl: string;
}
