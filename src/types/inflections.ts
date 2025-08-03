import type {
  DataItem,
  GrammaticalFeature,
  Inflection,
  Response,
} from "./common";

export type Inflections = Response<Result>;

type LexicalEntry = {
  language: string;
  inflections?: Inflection[];
  lexicalCategory: Required<DataItem>;
  grammaticalFeatures?: GrammaticalFeature[];
};

export type Result = {
  id: string;
  text?: string;
  language: string;
  lexicalEntries: LexicalEntry[];
};
