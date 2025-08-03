<script>
document.getElementById('prescription-form').addEventListener('submit', function(e) {
      e.preventDefault();

      const contact = document.getElementById('contact').value;
      const feedback = document.getElementById('feedback');

      if (!contact) {
        feedback.innerText = "Please enter your phone number.";
        feedback.style.color = "red";
        return;
      }

      const encodedMsg = encodeURIComponent(
        `Hi! I would like to order medicines.\nMy phone number: ${contact}\nPrescription is attached herewith`
      );
      const whatsappURL = `https://wa.me/919403143644?text=${encodedMsg}`;
      window.open(whatsappURL, "_blank");
      feedback.innerText = "Opening WhatsApp...";
      feedback.style.color = "green";
    });
