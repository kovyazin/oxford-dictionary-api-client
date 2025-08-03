import type {
  DataItem,
  EntryType,
  GrammaticalFeature,
  Metadata,
  Response,
} from "./common";

export type Lemmas = Response<Result, Pick<Metadata, "provider">>;

type LexicalEntry = {
  language: string;
  text: string;
  inflectionOf: Required<DataItem>[];
  lexicalCategory: Required<DataItem>;
  grammaticalFeatures: GrammaticalFeature[];
};

export type Result = {
  id: string;
  language: string;
  lexicalEntries: LexicalEntry[];
  type?: EntryType;
  word: string;
};
