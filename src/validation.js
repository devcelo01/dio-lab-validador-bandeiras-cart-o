// src/validation.js

function isValidLuhn(ccNum) {
  let sum = 0;
  let shouldDouble = false;

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

function detectBrand(ccNum) {
  if (/^(30[0-5]|36|38)/.test(ccNum)) return 'Diners Club';
  if (/^(2014|2149)/.test(ccNum)) return 'EnRoute';
  if (/^50/.test(ccNum)) return 'Aura';
  if (/^4/.test(ccNum)) return 'Visa';

  if (/^(5[1-5])/.test(ccNum) ||
      /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)/.test(ccNum)) {
    return 'MasterCard';
  }

  const eloPrefixes = ['4011','4312','4389','4514','4576','5041','5066','5090','6277','6362','6363'];
  for (const p of eloPrefixes) {
    if (ccNum.startsWith(p)) return 'Elo';
  }

  if (/^(352[8-9]|35[3-8]\d|3589)/.test(ccNum)) return 'JCB';
  if (/^3[47]/.test(ccNum)) return 'American Express';
  if (/^8699/.test(ccNum)) return 'Voyager';
  if (/^(6011|65|64[4-9])/.test(ccNum)) return 'Discover';
  if (/^6062/.test(ccNum)) return 'Hipercard';

  return null;
}

export function validateCard(input) {
  const digits = input.replace(/\D/g, '');
  const valid = digits.length >= 12 && digits.length <= 19 && isValidLuhn(digits);
  const brand = detectBrand(digits);

  return { valid, brand };
}