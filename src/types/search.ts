import type { Metadata, Response } from "./common";

type SearchMetadata = Metadata & {
  limit: string;
  offset: string;
  total: string;
  sourceLanguage: string;
};

export type Result = {
  id: string;
  label: string;
  matchString: string;
  matchType: string;
  region?: string;
  inflection_id?: string;
  score: number;
  word: string;
};

export type Search = Response<Result, SearchMetadata>;
