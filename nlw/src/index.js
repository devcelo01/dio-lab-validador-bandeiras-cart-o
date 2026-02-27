// Credit card validation and brand detection

/**
 * Check if a credit card number is valid using the Luhn algorithm.
 * @param {string} ccNum - Card number digits only
 * @returns {boolean}
 */
function isValidLuhn(ccNum) {
  let sum = 0;
  let shouldDouble = false;

  // iterate from rightmost digit
  for (let i = ccNum.length - 1; i >= 0; i--) {
    let digit = parseInt(ccNum[i], 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

/**
 * Determine the card brand (bandeira) based on prefixes.
 * @param {string} ccNum - Card number digits only
 * @returns {string|null} - brand name or null if unknown
 */
function detectBrand(ccNum) {
  // Diners Club: starts with 300-305, 36, or 38
  if (/^(30[0-5]|36|38)/.test(ccNum)) {
    return 'Diners Club';
  }

  // EnRoute: starts with 2014 or 2149
  if (/^(2014|2149)/.test(ccNum)) {
    return 'EnRoute';
  }

  // Aura: starts with 50 (check before MasterCard since both start with 5)
  if (/^50/.test(ccNum)) {
    return 'Aura';
  }

  // Visa: starts with 4
  if (/^4/.test(ccNum)) {
    return 'Visa';
  }

  // MasterCard: starts with 51-55 or 2221-2720
  if (/^(5[1-5])/.test(ccNum) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)/.test(ccNum)) {
    return 'MasterCard';
  }

  // Elo prefixes example set from image
  const eloPrefixes = [
    '4011',
    '4312',
    '4389',
    '4514',
    '4576',
    '5041',
    '5066',
    '5090',
    '6277',
    '6362',
    '6363',
  ];
  for (const p of eloPrefixes) {
    if (ccNum.startsWith(p)) return 'Elo';
  }

  // JCB: starts with 3528-3589
  if (/^(352[8-9]|35[3-8]\d|3589)/.test(ccNum)) {
    return 'JCB';
  }

  // American Express: starts with 34 or 37
  if (/^3[47]/.test(ccNum)) {
    return 'American Express';
  }

  // Voyager: starts with 8699
  if (/^8699/.test(ccNum)) {
    return 'Voyager';
  }

  // Discover: starts with 6011, 65, or 644-649
  if (/^(6011|65|64[4-9])/.test(ccNum)) {
    return 'Discover';
  }

  // Hipercard: starts with 6062
  if (/^6062/.test(ccNum)) {
    return 'Hipercard';
  }

  return null;
}

/**
 * Validate a credit card number and identify its brand.
 * @param {string} input - raw card number (may contain spaces/dashes)
 * @returns {{valid: boolean, brand: string|null}}
 */
function validateCard(input) {
  const digits = input.replace(/\D/g, '');
  const valid = digits.length >= 12 && digits.length <= 19 && isValidLuhn(digits);
  const brand = detectBrand(digits);
  return { valid, brand };
}

// Example usage (uncomment for manual testing):
console.log(validateCard('6062 8299 0473 4971'));
// → { valid: true, brand: 'Visa' }

module.exports = { validateCard };
