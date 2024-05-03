const dnaToRnaMap = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };

function convertDnaToRna(dna) {
  if (dna === null) return null;
  if (typeof dna !== 'string') {
    throw new Error('Invalid input: input must be a string');
  }
  if (dna === '') return '';

  const upperDna = dna.toUpperCase();
  if (/[^ACGT]/.test(upperDna)) {
    throw new Error('Invalid input: only ACGT are allowed');
  }
  
  return upperDna.split('').map(nucleotide => dnaToRnaMap[nucleotide]).join('');
}

module.exports = convertDnaToRna;