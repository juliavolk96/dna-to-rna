# DNA-to-RNA Converter

This package provides a simple utility to convert DNA sequences to RNA sequences according to the transcription rules:

G -> C  
C -> G  
T -> A  
A -> U

## Installation

```bash
npm install dna-genetic-transcription
```

## Usage

```bash
const DnaTranscriber = require('dna-genetic-transcription');

const transcriber = new DnaTranscriber();

const dnaSequence = 'ACGT';
const rnaSequence = transcriber.convertDnaToRna(dnaSequence);
console.log(rnaSequence); // 'UGCA'

try {
  console.log(transcriber.convertDnaToRna(null));
} catch (error) {
  console.error(error.message); // 'Invalid input: input cannot be null'
}

console.log(transcriber.convertDnaToRna('')); // ''

try {
  console.log(transcriber.convertDnaToRna(123));
} catch (error) {
    console.error(error.message); // 'Invalid input: input must be a string'
}

```