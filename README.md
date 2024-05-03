# DNA-to-RNA Converter

This package provides a simple utility to convert DNA sequences to RNA sequences according to the transcription rules:

G -> C
C -> G
T -> A
A -> U

## Installation

```bash
npm install dna-to-rna-converter
```

```bash
const convertDnaToRna = require('dna-to-rna-converter');

const dnaSequence = 'ACGT';
const rnaSequence = convertDnaToRna(dnaSequence);
console.log(rnaSequence); // 'UGCA'

// The function returns null for null input
console.log(convertDnaToRna(null)); // null

// The function returns an empty string for an empty string input
console.log(convertDnaToRna('')); // ''

```