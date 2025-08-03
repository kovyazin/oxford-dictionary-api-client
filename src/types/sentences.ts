import type {
  DataItem,
  GrammaticalFeature,
  Collocation,
  CrossReference,
  Response,
  Translation,
  Note,
  EntryType,
} from "./common";

type SentenceItem = {
  definitions?: string[];
  senseIds?: string[];
  text: string;
  translations?: Translation[];
  collocations?: Collocation[];
  crossReferenceMarkers?: string[];
  crossReferences?: CrossReference[];
  notes?: Note[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
};

type LexicalEntry = {
  language: string;
  text: string;
  sentences: SentenceItem[];
  lexicalCategory: Required<DataItem>;
  grammaticalFeatures?: GrammaticalFeature[];
};

export type Result = {
  id: string;
  language: string;
  lexicalEntries: LexicalEntry[];
  type: EntryType;
  word: string;
};

export type Sentences = Response<Result>;
