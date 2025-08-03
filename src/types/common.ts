export type Metadata = {
  operation: string;
  provider: string;
  schema: string;
};

export type Response<R, M = Metadata> = {
  metadata: M;
  results: R[];
};

export type DataItem = {
  id?: string;
  text?: string;
};

export enum EntryType {
  Headword = "headword",
  Inflection = "inflection",
  Phrase = "phrase",
}

export enum ToneType {
  Ipa = "ipa",
  DictionarySpecific = "dictionarySpecific",
  OupToneCode = "oupToneCode",
}

export type Tone = {
  type: ToneType;
  value: string;
};

export type ToneGroup = {
  tones: Tone[];
};

export enum CollocationType {
  Pre = "pre",
  Post = "post",
}

export type Collocation = {
  text: string;
  type: CollocationType;
  id: string;
};

export enum CrossReferenceType {
  CloseMatch = "close match",
  Related = "related",
  SeeAlso = "see also",
  VariantSpelling = "variant spelling",
  Abbreviation = "abbreviation",
}

export type CrossReference = {
  id: string;
  text: string;
  type: CrossReferenceType;
};

export enum NoteType {
  GrammaticalNote = "grammaticalNote",
  UsageNote = "usageNote",
  EditorialNote = "editorialNote",
  EncyclopedicNote = "encyclopedicNote",
  EtymologyNote = "etymologyNote",
  TechnicalNote = "technicalNote",
}

export type Note = {
  id?: string;
  text: string;
  type: NoteType;
};

export type GrammaticalFeature = {
  id: string;
  text: string;
  type: string;
};

export type SynonymOrAntonym = {
  id?: string;
  text: string;
  language?: string;
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
};

export type Example = {
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

export type Pronunciation = {
  phoneticNotation?: string;
  phoneticSpelling?: string;
  audioFile?: string;
  dialects?: string[];
  registers?: DataItem[];
  regions?: DataItem[];
};

export type VariantForm = {
  text: string;
  pronunciations?: Pronunciation[];
  notes?: Note[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
};

export type Inflection = {
  inflectedForm: string;
  lexicalCategory?: DataItem;
  grammaticalFeatures?: GrammaticalFeature[];
  pronunciations?: Pronunciation[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
};

export type Translation = {
  text: string;
  language: string;
  toneGroups?: ToneGroup[];
  type?: string;
  collocations?: Collocation[];
  grammaticalFeatures?: GrammaticalFeature[];
  notes?: Note[];
  regions?: DataItem[];
  registers?: DataItem[];
  domains?: DataItem[];
};

enum DictionaryType {
  Monolingual = "monolingual",
  Bilingual = "bilingual",
  Other = "other",
}

export type DictionaryName = {
  region?: string;
  source?: string;
  sourceLanguage?: { id: string; language: string };
  targetLanguage?: { id: string; language: string };
  type?: DictionaryType;
};
