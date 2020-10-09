// Case variations.
const LOWER_CASE = ['a', 'b', 'c', 'č', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 'z', 'ž', 't', 'u', 'v', 'y', 'ä', 'ö']
const UPPER_CASE = ['A', 'B', 'C', 'Č', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Y', 'Ä', 'Ö']

// Combined alphabet.
const ALPHABET = [...LOWER_CASE, ...UPPER_CASE]

module.exports = {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
}
