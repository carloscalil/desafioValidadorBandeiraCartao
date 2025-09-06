/**
 * Valida a bandeira do cartão de crédito com base no número informado.
 * Suporta MasterCard, Visa, American Express, Diners Club, Discover, EnRoute, JCB, Voyager, Hipercard e Aura.
 * @param {string} cardNumber - Número do cartão (apenas dígitos).
 * @returns {string|null} - Nome da bandeira ou mensagem de inválido se não reconhecida.
 */
function identificarBandeira(cardNumber) {
  const sanitized = cardNumber.trim().replace(/\s+/g, '').replace(/\D/g, '');

  const bandeiras = [
    { nome: 'MasterCard', regex: /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/ },
    { nome: 'Visa', regex: /^4\d{12}(\d{3})?$/ },
    { nome: 'American Express', regex: /^3[47]\d{13}$/ },
    { nome: 'Diners Club', regex: /^3(0[0-5]|[68]\d)\d{11}$/ },
    { nome: 'Discover', regex: /^6(?:011|5\d{2})\d{12}$/ },
    { nome: 'EnRoute', regex: /^(2014|2149)\d{11}$/ },
    { nome: 'JCB', regex: /^(352[89]\d{12}|35[3-8]\d{13})$/ },
    { nome: 'Voyager', regex: /^8699[0-9]{11}$/ },
    { nome: 'Hipercard', regex: /^(606282\d{10}(\d{3})?|3841(46|47)\d{13})$/ },
    { nome: 'Aura', regex: /^50(4175|6720)\d{10,13}$/ }
  ];

  for (const bandeira of bandeiras) {
    if (bandeira.regex.test(sanitized)) {
      return bandeira.nome;
    }
  }
  return 'Bandeira inválida!';
}

// Exemplos de uso:
console.log(identificarBandeira('4111 1111 11111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('340000000000009'));  // American Express
console.log(identificarBandeira('30569309025904'));   // Diners Club
console.log(identificarBandeira('6011111111111117')); // Discover
console.log(identificarBandeira('201400000000009'));  // EnRoute
console.log(identificarBandeira('3530111333300000')); // JCB
console.log(identificarBandeira('8699123 45678901'));  // Voyager
console.log(identificarBandeira('6062825624254001')); // Hipercard
console.log(identificarBandeira('5078601870000127980')); //