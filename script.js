const form = document.querySelector('#delivery-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    'Olá, Robert Águas! Quero solicitar uma entrega.',
    '',
    `Nome: ${data.get('name')}`,
    `Telefone: ${data.get('phone')}`,
    `Endereço completo: ${data.get('address')}`,
    `Ponto de referência: ${data.get('reference')}`
  ].join('\n');
  const url = `https://wa.me/5513991181863?text=${encodeURIComponent(message)}`;
  status.textContent = 'Abrindo o WhatsApp com os dados preenchidos.';
  window.open(url, '_blank', 'noopener,noreferrer');
});
