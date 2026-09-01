/* ==========================================================================
   MediCare Hub — Login / Register form logic (front-end demo validation)
   ========================================================================== */

(function () {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("l-email");
      const password = document.getElementById("l-password");
      let valid = true;

      toggleError(email, !/^\S+@\S+\.\S+$/.test(email.value));
      toggleError(password, password.value.length === 0);
      valid = /^\S+@\S+\.\S+$/.test(email.value) && password.value.length > 0;

      if (valid) {
        showToast("Logged in successfully — redirecting to your dashboard.");
        setTimeout(() => window.location.href = "dashboard.html", 900);
      }
    });
  }

  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    const passwordInput = document.getElementById("r-password");
    const strengthBars = document.querySelectorAll(".pass-strength span");

    passwordInput.addEventListener("input", () => {
      const val = passwordInput.value;
      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;
      const colors = ["var(--border-soft)", "#C24C4C", "#E2A63B", "#3C8F63", "#1B6B6B"];
      strengthBars.forEach((bar, i) => {
        bar.style.background = i < score ? colors[score] : "var(--border-soft)";
      });
    });

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("r-email");
      const password = document.getElementById("r-password");
      const emailValid = /^\S+@\S+\.\S+$/.test(email.value);
      const passValid = password.value.length >= 8;

      toggleError(email, !emailValid);
      toggleError(password, !passValid);

      if (emailValid && passValid) {
        showToast("Account created — welcome to MediCare Hub!");
        setTimeout(() => window.location.href = "dashboard.html", 900);
      }
    });
  }

  function toggleError(input, hasError) {
    const group = input.closest(".form-group");
    if (group) group.classList.toggle("error", hasError);
  }
})();
