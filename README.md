# Karelian Alphabet

Karelian language alphabet alphabet constants for JS.

### Motivation

Karelian alphabet is combination of Finnic and Slavic characteristics. Letters included may either be hard to type on some keyboards, or simply hard to remember. This is simple project to just get the whole list as array whenever iteration is needed.


### Install

`yarn add karelian-alphabet`

### Usage


Letter lists:

```javascript
const {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
} = require('karelian-alphabet')

console.log(LOWER_CASE)
// ['a', 'b', 'c', 'č', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 'z', 'ž', 't', 'u', 'v', 'y', 'ä', 'ö']

console.log(UPPER_CASE)
// ['A', 'B', 'C', 'Č', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Y', 'Ä', 'Ö']


console.log(ALPHABET) // combined upper & lower case.

```

Olonets Karelian alphabet (1989 – 2007):

```javascript
const {
  OLONETS_ALPHABET,
  OLONETS_LOWER_CASE,
  OLONETS_UPPER_CASE,
} = require('karelian-alphabet')

console.log(OLONETS_LOWER_CASE)
// ['a', 'b', 'č', 'd', 'ǯ', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 'z', 'ž', 't', 'u', 'v', 'ü', 'ä', 'ö']

console.log(OLONETS_UPPER_CASE)
// ['A', 'B', 'Č', 'D', 'Ǯ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Ü', 'Ä', 'Ö']


console.log(OLONETS_ALPHABET) // combined upper & lower case.

```


### About Karelian language.

[Karelian](https://en.wikipedia.org/wiki/Karelian_language) is a Finnic language, not to be confused with Karelian dialects of the Finnish language. It is close relative of Finnish language and they share high degree of mutual intelligibility.
