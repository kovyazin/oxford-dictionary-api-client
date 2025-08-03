import type {
  Collocation,
  CrossReference,
  DataItem,
  GrammaticalFeature,
  Response,
  Note,
  SynonymOrAntonym,
  Translation,
  VariantForm,
  EntryType,
} from "./common";

type Example = {
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

type Sense = {
  id: string;
  subsenses?: Sense[];
  examples?: Example[];
  antonyms?: SynonymOrAntonym[];
  synonyms?: SynonymOrAntonym[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
  domainClasses?: DataItem[];
  semanticClasses?: DataItem[];
};

type Entry = {
  homographNumber?: string;
  senses?: Sense[];
  grammaticalFeatures?: GrammaticalFeature[];
  variantForms?: VariantForm[];
};

type LexicalEntry = {
  entries?: Entry[];
  language: string;
  text: string;
  lexicalCategory: Required<DataItem>;
  grammaticalFeatures?: GrammaticalFeature[];
  variantForms?: VariantForm[];
};

export type Result = {
  word: string;
  id: string;
  language: string;
  type: EntryType;
  lexicalEntries: LexicalEntry[];
};

export type Thesaurus = Response<Result>;
