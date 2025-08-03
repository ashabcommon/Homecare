document.getElementById('prescription-form').addEventListener('submit', e => {
  e.preventDefault();
  const feedback = document.getElementById('feedback');
  feedback.textContent = 'Thank you! We received your prescription — we will contact you shortly.';
  feedback.style.display = 'block';
  // Here you can integrate real uploading via AJAX or backend route.
});
