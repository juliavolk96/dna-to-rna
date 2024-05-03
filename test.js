const assert = require('assert');
const convertDnaToRna = require('./index');

// Test for correct transcription
assert.strictEqual(convertDnaToRna('ACGT'), 'UGCA', 'ACGT should convert to UGCA');

// Test for error handling with invalid input
assert.throws(() => convertDnaToRna('ACGX'), Error, 'Should throw an error for invalid input');

// Test for handling an empty string input
assert.strictEqual(convertDnaToRna(''), '', 'Empty string should return empty string');

// Tests for working with different registers
assert.strictEqual(convertDnaToRna('acgt'), 'UGCA', 'acgt in lowercase should convert to UGCA');
assert.strictEqual(convertDnaToRna('aCgT'), 'UGCA', 'aCgT in mixed case should convert to UGCA');

// Tests for working with long sequences
const longDnaSequence = 'ACGT'.repeat(1000);
const longRnaSequence = convertDnaToRna(longDnaSequence);
assert.strictEqual(longRnaSequence.length, 4000, 'Long DNA sequence should convert to a long RNA sequence of the same length');

// Test to ensure no errors are thrown for large data inputs
assert.doesNotThrow(() => convertDnaToRna(longDnaSequence), 'Function should not throw an error even with large data');

// Tests for continuous sequences of identical nucleotides
assert.strictEqual(convertDnaToRna('AAAA'), 'UUUU', 'AAAA should convert to UUUU');
assert.strictEqual(convertDnaToRna('CCCC'), 'GGGG', 'CCCC should convert to GGGG');

// Test to ensure error is thrown for non-string inputs
assert.strictEqual(convertDnaToRna(null), null, 'Should return null for null input');

// Test to ensure error is thrown for non-string inputs
assert.throws(() => convertDnaToRna(123), Error, 'Should throw an error for non-string input');
assert.throws(() => convertDnaToRna({}), Error, 'Should throw an error for object input');
assert.throws(() => convertDnaToRna(undefined), Error, 'Should throw an error for undefined input');

console.log('All tests passed');