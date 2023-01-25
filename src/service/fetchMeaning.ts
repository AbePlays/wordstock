const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export interface Phonetic {
  text: string
  audio: string
}

export interface Definition {
  definition: string
  example: string
  synonyms: any[]
  antonyms: any[]
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
}

export interface RootObject {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  origin: string
  meanings: Meaning[]
}

export type QueryResponse = RootObject[]

export default async function fetchMeaning(
  word: string
): Promise<QueryResponse> {
  const res = await fetch(`${BASE_URL}/${word}`)
  const data = await res.json()
  return data
}
