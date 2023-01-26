const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export interface Phonetic {
  text: string
  audio: string
}

export interface Definition {
  definition: string
  example: string
  synonyms: string[]
  antonyms: string[]
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
}

export interface RootObject {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  origin: string
  meanings: Meaning[]
}

export interface FailureResponse {
  title: string
  message: string
  resolution: string
}

export type SuccessResponse = RootObject[]

export async function fetchMeaning(word: string): Promise<SuccessResponse> {
  const res = await fetch(`${BASE_URL}/${word}`)
  const data = await res.json()
  return data
}
