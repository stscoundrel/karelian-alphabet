const {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
  OLONETS_ALPHABET,
  OLONETS_LOWER_CASE,
  OLONETS_UPPER_CASE,
} = require('../index.js')

describe('Standard Karelian (2007 - Current)', () => {
  describe('Lowercase constants', () => {
    test('Alphabet is returned in array format', () => {
      expect(Array.isArray(LOWER_CASE)).toBeTruthy()
    })

    test('Alphabet contains 28 characters', () => {
      expect(LOWER_CASE.length).toBe(28)
    })

    test('Characters are returned in lowercase.', () => {
      LOWER_CASE.forEach((letter) => (
        expect(letter).toBe(letter.toLowerCase())
      ))
    })

    test('All characters also exist in main alphabet.', () => {
      LOWER_CASE.forEach((letter) => (
        expect(ALPHABET.includes(letter)).toBeTruthy()
      ))
    })
  })

  describe('Uppecase constants', () => {
    test('Alphabet is returned in array format', () => {
      expect(Array.isArray(UPPER_CASE)).toBeTruthy()
    })

    test('Alphabet contains 28 characters', () => {
      expect(UPPER_CASE.length).toBe(28)
    })

    test('Characters are returned in uppercase.', () => {
      UPPER_CASE.forEach((letter) => (
        expect(letter).toBe(letter.toUpperCase())
      ))
    })

    test('All characters also exist in main alphabet.', () => {
      UPPER_CASE.forEach((letter) => (
        expect(ALPHABET.includes(letter)).toBeTruthy()
      ))
    })
  })
})

describe('Olonets Karelian (1989 – 2007)', () => {
  describe('Lowercase constants', () => {
    test('Alphabet is returned in array format', () => {
      expect(Array.isArray(OLONETS_LOWER_CASE)).toBeTruthy()
    })

    test('Alphabet contains 28 characters', () => {
      expect(OLONETS_LOWER_CASE.length).toBe(28)
    })

    test('Characters are returned in lowercase.', () => {
      OLONETS_LOWER_CASE.forEach((letter) => (
        expect(letter).toBe(letter.toLowerCase())
      ))
    })

    test('All characters also exist in main alphabet.', () => {
      OLONETS_LOWER_CASE.forEach((letter) => (
        expect(OLONETS_ALPHABET.includes(letter)).toBeTruthy()
      ))
    })
  })

  describe('Uppecase constants', () => {
    test('Alphabet is returned in array format', () => {
      expect(Array.isArray(OLONETS_UPPER_CASE)).toBeTruthy()
    })

    test('Alphabet contains 28 characters', () => {
      expect(OLONETS_UPPER_CASE.length).toBe(28)
    })

    test('Characters are returned in uppercase.', () => {
      OLONETS_UPPER_CASE.forEach((letter) => (
        expect(letter).toBe(letter.toUpperCase())
      ))
    })

    test('All characters also exist in main alphabet.', () => {
      OLONETS_UPPER_CASE.forEach((letter) => (
        expect(OLONETS_ALPHABET.includes(letter)).toBeTruthy()
      ))
    })
  })
})
