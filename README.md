# Oxford Dictionary API

A TypeScript library for interacting with the Oxford Dictionary API. This library provides a comprehensive interface to access dictionary entries, translations, lemmas, inflections, thesaurus data, and more.

## Features

- 🔍 **Dictionary Entries** - Get detailed word definitions, pronunciations, and examples
- 🌐 **Translations** - Access translations between different languages
- 📚 **Thesaurus** - Find synonyms and antonyms
- 🔤 **Lemmas & Inflections** - Get word forms and grammatical variations
- 📝 **Sentences** - Retrieve example sentences
- 🔎 **Search** - Search for words with various filters
- 🛠️ **Utility Functions** - Access metadata, filters, fields, and more

## Installation

```bash
npm install oxford-dictionary-api
```

## Quick Start

```typescript
import { OxfordDictionary } from "oxford-dictionary-api";

// Initialize the client
const dictionary = new OxfordDictionary(
  "your-app-id",
  "your-app-key",
  "https://od-api.oxforddictionaries.com/api/v2"
);

// Get word entries
const entries = await dictionary.entries("en", "hello");
console.log(entries);
```

## API Reference

### Constructor

```typescript
new OxfordDictionary(appId: string, appKey: string, baseUrl: string)
```

- `appId` - Your Oxford Dictionary API application ID
- `appKey` - Your Oxford Dictionary API application key
- `baseUrl` - The base URL for the API (default: `https://od-api.oxforddictionaries.com/api/v2`)

### Core Methods

#### `entries(sourceLang, wordId, options?)`

Get detailed dictionary entries for a word.

**Options:**

- `domains` (string) - Filter by domain (e.g., 'academic', 'business', 'medical')
- `fields` (string[]) - Array of fields to include in response (e.g., ['definitions', 'examples', 'pronunciations'])
- `grammaticalFeatures` (string) - Filter by grammatical features
- `lexicalCategory` (string) - Filter by lexical category (e.g., 'noun', 'verb', 'adjective')
- `registers` (string) - Filter by register (e.g., 'formal', 'informal', 'technical')
- `strictMatch` (boolean) - Use strict matching (default: false)

```typescript
const entries = await dictionary.entries("en", "hello", {
  fields: ["definitions", "examples"],
  lexicalCategory: "noun",
  strictMatch: true,
});
```

#### `translations(sourceLang, targetLang, wordId, options?)`

Get translations for a word between languages.

**Options:**

- `domains` (string) - Filter by domain (e.g., 'academic', 'business', 'medical')
- `fields` (string[]) - Array of fields to include in response (e.g., ['translations', 'definitions'])
- `grammaticalFeatures` (string) - Filter by grammatical features
- `lexicalCategory` (string) - Filter by lexical category (e.g., 'noun', 'verb', 'adjective')
- `registers` (string) - Filter by register (e.g., 'formal', 'informal', 'technical')
- `strictMatch` (boolean) - Use strict matching (default: false)

```typescript
const translations = await dictionary.translations("en", "es", "hello", {
  fields: ["translations"],
  strictMatch: true,
});
```

#### `words(sourceLang, query, options?)`

Search for words with various filters.

**Options:**

- `domains` (string) - Filter by domain (e.g., 'academic', 'business', 'medical')
- `fields` (string[]) - Array of fields to include in response (e.g., ['definitions', 'examples'])
- `grammaticalFeatures` (string) - Filter by grammatical features
- `lexicalCategory` (string) - Filter by lexical category (e.g., 'noun', 'verb', 'adjective')
- `registers` (string) - Filter by register (e.g., 'formal', 'informal', 'technical')
- `strictMatch` (boolean) - Use strict matching (default: false)

```typescript
const words = await dictionary.words("en", "hello", {
  domains: "academic",
  lexicalCategory: "noun",
});
```

#### `lemmas(sourceLang, wordId, options?)`

Get lemmas (base forms) of a word.

**Options:**

- `grammaticalFeatures` (string) - Filter by grammatical features
- `lexicalCategory` (string) - Filter by lexical category (e.g., 'noun', 'verb', 'adjective')

```typescript
const lemmas = await dictionary.lemmas("en", "running", {
  lexicalCategory: "verb",
});
```

#### `inflections(sourceLang, wordId, options?)`

Get inflected forms of a word.

**Options:**

- `strictMatch` (boolean) - Use strict matching (default: false)

```typescript
const inflections = await dictionary.inflections("en", "run", {
  strictMatch: true,
});
```

#### `thesaurus(sourceLang, wordId, options?)`

Get thesaurus data (synonyms, antonyms).

**Options:**

- `fields` (string[]) - Array of fields to include in response (e.g., ['synonyms', 'antonyms'])
- `strictMatch` (boolean) - Use strict matching (default: false)

```typescript
const thesaurus = await dictionary.thesaurus("en", "happy", {
  fields: ["synonyms", "antonyms"],
});
```

#### `sentences(sourceLang, wordId, options?)`

Get example sentences for a word.

**Options:**

- `strictMatch` (boolean) - Use strict matching (default: false)

```typescript
const sentences = await dictionary.sentences("en", "hello", {
  strictMatch: true,
});
```

### Search Methods

#### `search.entries(sourceLang, query, options?)`

Search for dictionary entries.

**Options:**

- `limit` (number) - Maximum number of results to return (default: 50)
- `offset` (number) - Number of results to skip for pagination (default: 0)
- `prefix` (boolean) - Use prefix matching (default: false)

```typescript
const searchResults = await dictionary.search.entries("en", "hello", {
  limit: 10,
  offset: 0,
  prefix: true,
});
```

#### `search.thesaurus(sourceLang, query, options?)`

Search for thesaurus entries.

**Options:**

- `limit` (number) - Maximum number of results to return (default: 50)
- `offset` (number) - Number of results to skip for pagination (default: 0)
- `prefix` (boolean) - Use prefix matching (default: false)

```typescript
const thesaurusSearch = await dictionary.search.thesaurus("en", "happy", {
  limit: 5,
});
```

#### `search.translations(sourceLang, targetLang, query, options?)`

Search for translations.

**Options:**

- `limit` (number) - Maximum number of results to return (default: 50)
- `offset` (number) - Number of results to skip for pagination (default: 0)
- `prefix` (boolean) - Use prefix matching (default: false)

```typescript
const translationSearch = await dictionary.search.translations(
  "en",
  "es",
  "hello",
  {
    limit: 10,
  }
);
```

### Utility Methods

#### `utility.dictionaryNames(options?)`

Get available dictionary names.

**Options:**

- `sourceLang` (string) - Source language code (e.g., 'en', 'es', 'fr')
- `targetLang` (string) - Target language code (e.g., 'en', 'es', 'fr')

```typescript
const dictionaries = await dictionary.utility.dictionaryNames({
  sourceLang: "en",
  targetLang: "es",
});
```

#### `utility.filters(endpoint?)`

Get available filters.

**Parameters:**

- `endpoint` (string, optional) - Specific endpoint to get filters for (e.g., 'entries', 'thesaurus')

```typescript
const filters = await dictionary.utility.filters("entries");
```

#### `utility.fields(endpoint?)`

Get available fields.

**Parameters:**

- `endpoint` (string, optional) - Specific endpoint to get fields for (e.g., 'entries', 'thesaurus')

```typescript
const fields = await dictionary.utility.fields("entries");
```

#### `utility.lexicalCategories(sourceLang, targetLang?)`

Get lexical categories.

**Parameters:**

- `sourceLang` (string) - Source language code (e.g., 'en', 'es', 'fr')
- `targetLang` (string, optional) - Target language code (e.g., 'en', 'es', 'fr')

```typescript
const categories = await dictionary.utility.lexicalCategories("en", "es");
```

#### `utility.registers(sourceLang, targetLang?)`

Get available registers.

**Parameters:**

- `sourceLang` (string) - Source language code (e.g., 'en', 'es', 'fr')
- `targetLang` (string, optional) - Target language code (e.g., 'en', 'es', 'fr')

```typescript
const registers = await dictionary.utility.registers("en", "es");
```

#### `utility.domains(sourceLang, targetLang?)`

Get available domains.

**Parameters:**

- `sourceLang` (string) - Source language code (e.g., 'en', 'es', 'fr')
- `targetLang` (string, optional) - Target language code (e.g., 'en', 'es', 'fr')

```typescript
const domains = await dictionary.utility.domains("en", "es");
```

#### `utility.grammaticalFeatures(sourceLang, targetLang?)`

Get grammatical features.

**Parameters:**

- `sourceLang` (string) - Source language code (e.g., 'en', 'es', 'fr')
- `targetLang` (string, optional) - Target language code (e.g., 'en', 'es', 'fr')

```typescript
const features = await dictionary.utility.grammaticalFeatures("en", "es");
```

## Response Types

The library provides comprehensive TypeScript types for all API responses:

- `Entries` - Dictionary entries
- `Lemmas` - Word lemmas
- `Inflections` - Word inflections
- `Thesaurus` - Thesaurus data
- `Sentences` - Example sentences
- `Search` - Search results

## Error Handling

The library throws errors for failed API requests:

```typescript
try {
  const entries = await dictionary.entries("en", "nonexistentword");
} catch (error) {
  console.error("API Error:", error);
}
```

## Getting API Credentials

To use this library, you need to register for an Oxford Dictionary API account:

1. Visit [Oxford Dictionary API](https://developer.oxforddictionaries.com/)
2. Sign up for a free account
3. Create a new application to get your App ID and App Key

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
