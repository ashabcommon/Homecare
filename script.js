document.getElementById('prescription-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const contact = document.getElementById('contact').value.trim();
  const feedback = document.getElementById('feedback');

  if (!contact) {
    feedback.textContent = 'Please enter your phone number.';
    feedback.style.color = 'red';
    return;
  }

  const message = `Hi! I want to place an order.%0AMy phone number: ${contact}%0APrescription is attached below 👇`;

  const whatsappUrl = `https://wa.me/919403143644?text=${message}`;
  window.open(whatsappUrl, '_blank');

  feedback.textContent = 'Redirecting to WhatsApp...';
  feedback.style.color = 'green';
});
