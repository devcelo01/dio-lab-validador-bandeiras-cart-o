import { validateCard } from './validation.js';

const input = document.getElementById('input');
const result = document.getElementById('result');
const previewNumber = document.getElementById('previewNumber');
const previewBrand = document.getElementById('previewBrand');
const card = document.getElementById('card');

// 🎨 Logos (SVG online)
const brandStyles = {
  Visa: {
    color: 'linear-gradient(135deg,#1a1f71,#3b82f6)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg'
  },
  MasterCard: {
    color: 'linear-gradient(135deg,#eb001b,#f79e1b)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'
  },
  Elo: {
    color: 'linear-gradient(135deg,#000000,#10b981)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Elo_logo.png'
  },
  'American Express': {
    color: 'linear-gradient(135deg,#2e77bb,#60a5fa)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg'
  },
  Hipercard: {
    color: 'linear-gradient(135deg,#b91c1c,#ef4444)',
    logo: null
  }
};

// Formatação
function format(value) {
  return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

// Atualização em tempo real (🔥 igual app)
input.addEventListener('input', () => {
  input.value = format(input.value);

  const raw = input.value;
  const { valid, brand } = validateCard(raw);

  // Número no cartão
  previewNumber.textContent = raw || '#### #### #### ####';

  // Bandeira
  previewBrand.textContent = brand || 'Bandeira';

  // Validação
  result.textContent = raw
    ? (valid ? 'Cartão válido ✔' : 'Cartão inválido ✖')
    : '';
  result.className = valid ? 'valid' : 'invalid';

  // 🎨 Estilo dinâmico
  if (brand && brandStyles[brand]) {
    card.style.background = brandStyles[brand].color;

    if (brandStyles[brand].logo) {
      card.style.setProperty('--logo', `url(${brandStyles[brand].logo})`);
      card.style.backgroundImage = `${brandStyles[brand].color}, url(${brandStyles[brand].logo})`;
    }
  } else {
    card.style.background = 'linear-gradient(135deg,#6366f1,#1e40af)';
  }
});