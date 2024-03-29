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
  sourceUrls: string[]
}

export interface FailureResponse {
  title: string
  message: string
  resolution: string
}

export type SuccessResponse = RootObject[]

const mockData = [
  {
    word: 'bang',
    phonetic: '/bæŋ(ɡ)/',
    phonetics: [
      {
        text: '/bæŋ(ɡ)/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/bang-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=50554427',
        license: {
          name: 'BY-SA 4.0',
          url: 'https://creativecommons.org/licenses/by-sa/4.0',
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A sudden percussive noise.',
            synonyms: [],
            antonyms: [],
            example: 'When he struck it with a hammer, there was a loud bang.',
          },
          {
            definition: 'A strike upon an object causing such a noise.',
            synonyms: [],
            antonyms: [],
          },
          { definition: 'An explosion.', synonyms: [], antonyms: [] },
          {
            definition: 'The symbol !, known as an exclamation point.',
            synonyms: [],
            antonyms: [],
            example: 'An e-mail address with an ! is called a bang path.',
          },
          {
            definition:
              'A factorial, in mathematics, because the factorial of n is often written as n!',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'An act of sexual intercourse.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'An offbeat figure typical of reggae songs and played on guitar and piano.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'An explosive product.',
            synonyms: [],
            antonyms: [],
            example: 'Load the bang into the hole.',
          },
          {
            definition: 'An injection, a shot (of a narcotic drug).',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: '(Boston area) An abrupt left turn.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'Strong smell (of)',
            synonyms: [],
            antonyms: [],
            example: 'There was a bang of onions off his breath.',
          },
          { definition: 'A thrill.', synonyms: [], antonyms: [] },
        ],
        synonyms: [
          'exclamation mark',
          'exclamation point',
          'blow',
          'strike',
          'explosion',
        ],
        antonyms: ['hang'],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'To make sudden loud noises, and often repeatedly, especially by exploding or hitting something.',
            synonyms: [],
            antonyms: [],
            example:
              'My head was banging after drinking all night at the concert.',
          },
          {
            definition: 'To hit hard.',
            synonyms: [],
            antonyms: [],
            example: 'David and Mary banged into each other.',
          },
          {
            definition: 'To engage in sexual intercourse.',
            synonyms: ['do it', 'have sex', 'nail'],
            antonyms: [],
            example: 'We can hear the couple banging upstairs.',
          },
          {
            definition: '(with "in") To hammer or to hit anything hard.',
            synonyms: [],
            antonyms: [],
            example: 'Hold the picture while I bang in this nail.',
          },
          {
            definition:
              "To cut squarely across, as the tail of a horse, or a person's forelock; to cut (the hair).",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'To inject intravenously.',
            synonyms: [],
            antonyms: [],
            example: 'Do you smoke meth? No, I bang it.',
          },
        ],
        synonyms: ['do it', 'have sex', 'nail'],
        antonyms: [],
      },
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition: 'Right, directly.',
            synonyms: [],
            antonyms: [],
            example: 'The passenger door was bang against the garage wall.',
          },
          {
            definition: 'Precisely.',
            synonyms: [],
            antonyms: [],
            example: 'He arrived bang on time.',
          },
          {
            definition: 'With a sudden impact.',
            synonyms: [],
            antonyms: [],
            example: 'Distracted, he ran bang into the opening door.',
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: 'interjection',
        definitions: [
          {
            definition:
              'A sudden percussive sound, such as made by the firing of a gun, slamming of a door, etc.',
            synonyms: [],
            antonyms: [],
            example:
              'He pointed his finger at her like a gun and said, "Bang!"',
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Hair hanging over the forehead.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'A hairstyle including such hair, especially cut straight across the forehead.',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ['bang', 'forelocks', 'fringe', 'bang', 'fringe'],
        antonyms: [],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Brucellosis, a bacterial disease.',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: 'CC BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0',
    },
    sourceUrls: [
      'https://en.wiktionary.org/wiki/bang',
      'https://en.wiktionary.org/wiki/bangs',
    ],
  },
  {
    word: 'bang',
    phonetic: '/bæŋ(ɡ)/',
    phonetics: [
      {
        text: '/bæŋ(ɡ)/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/bang-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=50554427',
        license: {
          name: 'BY-SA 4.0',
          url: 'https://creativecommons.org/licenses/by-sa/4.0',
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Cannabis, especially as used in the Indian subcontinent.',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: 'CC BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0',
    },
    sourceUrls: [
      'https://en.wiktionary.org/wiki/bang',
      'https://en.wiktionary.org/wiki/bhang',
    ],
  },
]

export async function fetchMeaning(word: string): Promise<any> {
  if (import.meta.env.DEV) {
    return Promise.resolve(mockData)
  } else {
    const res = await fetch(`${BASE_URL}/${word}`)
    const data = await res.json()
    return data
  }
}
