import type {
  DataItem,
  Response,
  GrammaticalFeature,
  Inflection,
  Pronunciation,
  Example,
  Note,
  CrossReference,
  VariantForm,
  SynonymOrAntonym,
  Translation,
  EntryType,
} from "./common";

export type Entries = Response<Result>;

type Word = {
  text: string;
  id: string;
  language?: string;
  registers?: DataItem[];
  regions?: DataItem[];
  domains?: DataItem[];
};

type DatasetCrossLink = {
  language: string;
  entry_id: string;
  sense_id: string;
};

type ThesaurusLink = {
  entry_id: string;
  sense_id: string;
};

type Construction = {
  text: string;
  examples?: Example[];
  translations?: Translation[];
  notes?: Note[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
};

export type Sense = {
  datasetCrossLinks?: DatasetCrossLink[];
  definitions?: string[];
  etymologies?: string[];
  shortDefinitions?: string[];
  id?: string;
  subsenses?: Sense[];
  thesaurusLinks?: ThesaurusLink[];
  examples?: Example[];
  inflections?: Inflection[];
  constructions?: Construction[];
  translations?: Translation[];
  crossReferenceMarkers?: string[];
  crossReferences?: CrossReference[];
  pronunciations?: Pronunciation[];
  notes?: Note[];
  variantForms?: VariantForm[];
  synonyms?: SynonymOrAntonym[];
  antonyms?: SynonymOrAntonym[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
  domainClasses?: DataItem[];
  semanticClasses?: DataItem[];
};

export type Entry = {
  etymologies?: string[];
  homographNumber?: string;
  senses?: Sense[];
  inflections?: Inflection[];
  crossReferenceMarkers?: string[];
  crossReferences?: CrossReference[];
  grammaticalFeatures?: GrammaticalFeature[];
  pronunciations?: Pronunciation[];
  notes?: Note[];
  variantForms?: VariantForm[];
};

export type LexicalEntry = {
  entries?: Entry[];
  derivatives?: Word[];
  compounds?: Word[];
  phrases?: Word[];
  phrasalVerbs?: Word[];
  derivativeOf?: Word[];
  language: string;
  text: string;
  root?: string;
  lexicalCategory: DataItem;
  pronunciations?: Pronunciation[];
  notes?: Note[];
  variantForms?: VariantForm[];
};

export type Result = {
  id: string;
  language: string;
  lexicalEntries: LexicalEntry[];
  type?: EntryType;
  word: string;
  pronunciations?: Pronunciation[];
};
