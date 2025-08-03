import type {
  Entries,
  Inflections,
  Lemmas,
  Search,
  Thesaurus,
  Sentences,
  Response,
  DictionaryName,
} from "./types/index.js";
import {
  buildPath,
  buildQueryString,
  concatPathAndQueryString,
} from "./utils.js";

export class OxfordDictionary {
  #appId: string;
  #appKey: string;
  #baseUrl: string;

  constructor(appId: string, appKey: string, baseUrl: string) {
    this.#appId = appId;
    this.#appKey = appKey;
    this.#baseUrl = baseUrl;
  }

  private async request<T>(path: string): Promise<T> {
    try {
      const credentials = { app_id: this.#appId, app_key: this.#appKey };
      const basicHeaders = { "Content-Type": "application/json" };
      const headers = { ...credentials, ...basicHeaders };

      const url = `${this.#baseUrl}${path}`;

      const response = await fetch(url, { headers });

      if (!response.ok) {
        const error = await response.json();
        throw error;
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async entries(
    sourceLang: string,
    wordId: string,
    options: {
      domains?: string;
      fields?: string[];
      grammaticalFeatures?: string;
      lexicalCategory?: string;
      registers?: string;
      strictMatch?: boolean;
    } = {}
  ) {
    const queryString = buildQueryString(options);
    const path = `/entries/${sourceLang}/${wordId}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Entries>(url);
  }

  public async translations(
    sourceLang: string,
    targetLang: string,
    wordId: string,
    options: {
      domains?: string;
      fields?: string[];
      grammaticalFeatures?: string;
      lexicalCategory?: string;
      registers?: string;
      strictMatch?: boolean;
    } = {}
  ) {
    const queryString = buildQueryString(options);
    const path = `/translations/${sourceLang}/${targetLang}/${wordId}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Entries>(url);
  }

  public async words(
    sourceLang: string,
    query: string,
    options: {
      domains?: string;
      fields?: string[];
      grammaticalFeatures?: string;
      lexicalCategory?: string;
      registers?: string;
      strictMatch?: boolean;
    } = {}
  ) {
    const queryString = buildQueryString({ ...options, q: query });
    const path = `/words/${sourceLang}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Entries>(url);
  }

  public async lemmas(
    sourceLang: string,
    wordId: string,
    options: {
      grammaticalFeatures?: string;
      lexicalCategory?: string;
    } = {}
  ) {
    const queryString = buildQueryString(options);
    const path = `/lemmas/${sourceLang}/${wordId}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Lemmas>(url);
  }

  public async inflections(
    sourceLang: string,
    wordId: string,
    options: {
      strictMatch?: boolean;
    } = {}
  ) {
    const queryString = buildQueryString(options);
    const path = `/inflections/${sourceLang}/${wordId}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Inflections>(url);
  }

  public async thesaurus(
    sourceLang: string,
    wordId: string,
    options: {
      fields?: string[];
      strictMatch?: boolean;
    } = {}
  ) {
    const queryString = buildQueryString(options);
    const path = `/thesaurus/${sourceLang}/${wordId}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Thesaurus>(url);
  }

  public async sentences(
    sourceLang: string,
    wordId: string,
    options: { strictMatch?: boolean } = {}
  ) {
    const queryString = buildQueryString(options);
    const path = `/sentences/${sourceLang}/${wordId}`;
    const url = concatPathAndQueryString(path, queryString);
    return this.request<Sentences>(url);
  }

  public readonly utility = {
    dictionaryNames: ({
      targetLang,
      sourceLang,
    }: {
      targetLang?: string;
      sourceLang?: string;
    }) => {
      const queryString = buildQueryString({ targetLang, sourceLang });
      const path = "/languages";
      const url = concatPathAndQueryString(path, queryString);
      return this.request<Response<DictionaryName>>(url);
    },
    filters: (endpoint?: string) => {
      const path = buildPath(["/filters", endpoint]);
      return this.request<
        Response<{ entries?: string[]; thesaurus?: string[] }>
      >(path);
    },
    fields: (endpoint?: string) => {
      const path = buildPath(["/fields", endpoint]);
      return this.request<
        Response<{ entries?: string[]; thesaurus?: string[] }>
      >(path);
    },
    lexicalCategories: (sourceLang: string, targetLang?: string) => {
      const path = buildPath(["/lexicalCategories", sourceLang, targetLang]);
      return this.request<Response<Record<string, { en: string }>>>(path);
    },
    registers: (sourceLang: string, targetLang?: string) => {
      const path = buildPath(["/registers", sourceLang, targetLang]);
      return this.request<Response<Record<string, { en: string }>>>(path);
    },
    domains: (sourceLang: string, targetLang?: string) => {
      const path = buildPath(["/domains", sourceLang, targetLang]);
      return this.request<Response<Record<string, { en: string }>>>(path);
    },
    grammaticalFeatures: (sourceLang: string, targetLang?: string) => {
      const path = buildPath(["/grammaticalFeatures", sourceLang, targetLang]);
      return this.request<
        Response<Record<string, Record<string, { en: string }>>>
      >(path);
    },
  };

  public readonly search = {
    entries: (
      sourceLang: string,
      query: string,
      options: { limit?: number; offset?: number; prefix?: boolean } = {}
    ) => {
      const queryString = buildQueryString({ ...options, q: query });
      const path = `/search/${sourceLang}`;
      const url = concatPathAndQueryString(path, queryString);
      return this.request<Search>(url);
    },
    thesaurus: (
      sourceLang: string,
      query: string,
      options: { limit?: number; offset?: number; prefix?: boolean } = {}
    ) => {
      const queryString = buildQueryString({ ...options, q: query });
      const path = `/search/thesaurus/${sourceLang}`;
      const url = concatPathAndQueryString(path, queryString);
      return this.request<Search>(url);
    },
    translations: (
      sourceLang: string,
      targetLang: string,
      query: string,
      options: { limit?: number; offset?: number; prefix?: boolean } = {}
    ) => {
      const queryString = buildQueryString({ ...options, q: query });
      const path = `/search/translations/${sourceLang}/${targetLang}`;
      const url = concatPathAndQueryString(path, queryString);
      return this.request<Search>(url);
    },
  };
}
