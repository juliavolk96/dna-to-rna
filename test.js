const assert = require('assert');
const DnaTranscriber = require('./index');

// Creating an instance of the DnaTranscriber class
const transcriber = new DnaTranscriber();

// Test for correct transcription
assert.strictEqual(transcriber.convertDnaToRna('ACGT'), 'UGCA', 'ACGT should convert to UGCA');

// Test for error handling with invalid input
assert.throws(() => transcriber.convertDnaToRna('ACGX'), Error, 'Should throw an error for invalid input');

// Test for handling an empty string input
assert.strictEqual(transcriber.convertDnaToRna(''), '', 'Empty string should return empty string');

// Tests for working with different registers
assert.strictEqual(transcriber.convertDnaToRna('acgt'), 'UGCA', 'acgt in lowercase should convert to UGCA');
assert.strictEqual(transcriber.convertDnaToRna('aCgT'), 'UGCA', 'aCgT in mixed case should convert to UGCA');

// Tests for working with long sequences
const longDnaSequence = 'ACGT'.repeat(1000);
const longRnaSequence = transcriber.convertDnaToRna(longDnaSequence);
assert.strictEqual(longRnaSequence.length, 4000, 'Long DNA sequence should convert to a long RNA sequence of the same length');

// Test to ensure no errors are thrown for large data inputs
assert.doesNotThrow(() => transcriber.convertDnaToRna(longDnaSequence), 'Function should not throw an error even with large data');

// Tests for continuous sequences of identical nucleotides
assert.strictEqual(transcriber.convertDnaToRna('AAAA'), 'UUUU', 'AAAA should convert to UUUU');
assert.strictEqual(transcriber.convertDnaToRna('CCCC'), 'GGGG', 'CCCC should convert to GGGG');

// Test to ensure error is thrown for non-string inputs
assert.throws(() => transcriber.convertDnaToRna(null), Error, 'Should throw an error for null input');

// Test to ensure error is thrown for non-string inputs
assert.throws(() => transcriber.convertDnaToRna(123), Error, 'Should throw an error for non-string input');
assert.throws(() => transcriber.convertDnaToRna({}), Error, 'Should throw an error for object input');
assert.throws(() => transcriber.convertDnaToRna(undefined), Error, 'Should throw an error for undefined input');

console.log('All tests passed');