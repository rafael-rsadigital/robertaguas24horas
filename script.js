const form = document.querySelector('#delivery-form');
const status = document.querySelector('#form-status');
const informLater = document.querySelector('#inform-later');
const fields = [...form.querySelectorAll('input:not([type="checkbox"])')];

informLater.addEventListener('change', () => {
  fields.forEach((field) => {
    field.required = !informLater.checked;
    field.disabled = informLater.checked;
  });
});

document.querySelector('.floating-whatsapp').addEventListener('click', () => {
  window.setTimeout(() => document.querySelector('#name').focus(), 350);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    'Olá, Robert Águas! Quero solicitar uma entrega.',
    '',
    informLater.checked ? 'Informarei meus dados pelo WhatsApp.' : [
      `Nome: ${data.get('name')}`,
      `Telefone: ${data.get('phone')}`,
      `Endereço completo: ${data.get('address')}`,
      `Ponto de referência: ${data.get('reference')}`
    ].join('\n')
  ].join('\n');
  const url = `https://wa.me/5513991181863?text=${encodeURIComponent(message)}`;
  status.textContent = 'Abrindo o WhatsApp com os dados preenchidos.';
  window.open(url, '_blank', 'noopener,noreferrer');
});
