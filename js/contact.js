(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message sent — we'll get back to you soon.");
    form.reset();
  });
})();
