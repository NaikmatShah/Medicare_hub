/* ==========================================================================
   MediCare Hub — Booking flow logic
   ========================================================================== */

(function () {
  const summaryDocEl = document.getElementById("summary-doc");
  if (!summaryDocEl) return;

  const params = new URLSearchParams(window.location.search);
  const doc = getDoctorById(params.get("id")) || DOCTORS[0];

  let state = { type: doc.types[0], date: null, time: null };

  // ---- Consultation type options ----
  const typeIcons = {
    "In-person": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    "Video": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>`
  };
  document.getElementById("type-options").innerHTML = doc.types.map((t, i) => `
    <div class="type-option ${i === 0 ? "selected" : ""}" data-type="${t}">
      ${typeIcons[t]}
      <b>${t}</b>
      <span>${t === "Video" ? "From your device" : doc.location}</span>
    </div>
  `).join("");

  document.querySelectorAll(".type-option").forEach(el => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".type-option").forEach(o => o.classList.remove("selected"));
      el.classList.add("selected");
      state.type = el.dataset.type;
      updateSummary();
    });
  });

  // ---- Date strip (next 7 days) ----
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateStrip = document.getElementById("date-strip");
  const today = new Date();
  let dateHTML = "";
  const dateKeys = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    dateKeys.push({ key, label: `${dayNames[d.getDay()]}, ${d.toLocaleString("en-US", { month: "short" })} ${d.getDate()}` });
    dateHTML += `<div class="date-chip ${i === 0 ? "selected" : ""}" data-key="${key}"><span>${dayNames[d.getDay()]}</span><b>${d.getDate()}</b></div>`;
  }
  dateStrip.innerHTML = dateHTML;
  state.date = dateKeys[0];

  dateStrip.querySelectorAll(".date-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      dateStrip.querySelectorAll(".date-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      state.date = dateKeys.find(d => d.key === chip.dataset.key);
      state.time = null;
      renderSlots();
      updateSummary();
    });
  });

  // ---- Time slots ----
  const allSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:15 AM", "1:00 PM", "1:30 PM", "2:15 PM", "3:00 PM", "3:30 PM", "4:15 PM", "5:00 PM"];
  function renderSlots() {
    const grid = document.getElementById("slot-grid");
    // deterministic pseudo-random "taken" slots based on date so it feels real but stable
    const seed = state.date.key.split("-").reduce((a, c) => a + Number(c), 0);
    grid.innerHTML = allSlots.map((s, i) => {
      const taken = (seed + i) % 5 === 0;
      return `<div class="slot ${taken ? "taken" : ""}" data-time="${s}">${s}</div>`;
    }).join("");
    grid.querySelectorAll(".slot:not(.taken)").forEach(slot => {
      slot.addEventListener("click", () => {
        grid.querySelectorAll(".slot").forEach(s => s.classList.remove("selected"));
        slot.classList.add("selected");
        state.time = slot.dataset.time;
        updateSummary();
      });
    });
  }
  renderSlots();

  // ---- Summary ----
  summaryDocEl.innerHTML = `
    <img src="${doc.photo}" alt="${doc.name}">
    <div><b>${doc.name}</b><span>${doc.specialty}</span></div>
  `;

  function updateSummary() {
    document.getElementById("sum-type").textContent = state.type;
    document.getElementById("sum-date").textContent = state.date ? state.date.label : "—";
    document.getElementById("sum-time").textContent = state.time || "—";
    document.getElementById("sum-fee").textContent = "$" + doc.fee;
  }
  updateSummary();

  // ---- Confirm booking ----
  document.getElementById("confirm-btn").addEventListener("click", () => {
    const name = document.getElementById("p-name").value.trim();
    const phone = document.getElementById("p-phone").value.trim();

    if (!name || !phone) {
      showToast("Please fill in your name and phone number.");
      return;
    }
    if (!state.time) {
      showToast("Please select a time slot.");
      return;
    }

    const ref = "MC-" + Math.floor(10000 + Math.random() * 89999);
    document.getElementById("ref-code").textContent = ref;
    document.getElementById("confirm-modal").classList.add("open");
  });
})();
