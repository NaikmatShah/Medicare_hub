/* ==========================================================================
   MediCare Hub — Homepage rendering
   ========================================================================== */

const SPECIALTY_ICONS = {
  "Cardiology": `<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/>`,
  "Dermatology": `<path d="M12 2C8 7 5 10.5 5 14a7 7 0 0 0 14 0c0-3.5-3-7-7-12z"/>`,
  "Pediatrics": `<circle cx="12" cy="9" r="4"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/>`,
  "Neurology": `<path d="M9 3a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 9v1a3 3 0 0 0 1 2.2V14a3 3 0 0 0 3 3h1"/><path d="M15 3a3 3 0 0 1 3 3v.3A3 3 0 0 1 20 9v1a3 3 0 0 1-1 2.2V14a3 3 0 0 1-3 3h-1"/><path d="M9 6h6M9 21h6M12 17v4"/>`,
  "Orthopedics": `<path d="M6 6a2.5 2.5 0 1 1 4 2l8 8a2.5 2.5 0 1 1-2 4l-8-8a2.5 2.5 0 1 1-2-6z"/>`,
  "Dentistry": `<path d="M12 3c-3 0-5 2-5 5 0 3 1 5 1.5 8 .3 1.6 1 3 2 3s1.4-2 1.5-4c.1-1 .5-1.5 1-1.5s.9.5 1 1.5c.1 2 .5 4 1.5 4s1.7-1.4 2-3c.5-3 1.5-5 1.5-8 0-3-2-5-5-5z"/>`,
  "Psychiatry": `<path d="M9 18a5 5 0 0 1-2-9.8A5 5 0 0 1 17 6a5 5 0 0 1 2 9.6M9 18v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2M9 18h6"/>`,
  "Gynecology": `<circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/>`,
  "General Physician": `<path d="M6 4v6a4 4 0 0 0 8 0V4M10 4h.01M18 4v4a2 2 0 1 1-4 0"/><circle cx="18" cy="14" r="4"/>`,
  "ENT Specialist": `<path d="M6 12a6 6 0 1 1 12 0c0 3-2 4-2 7a3 3 0 0 1-6 0"/>`,
  "Ophthalmology": `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`,
  "Endocrinology": `<path d="M3 12h4l2-7 4 14 2-7h6"/>`
};

const SPECIALTY_DESCRIPTIONS = {
  "Cardiology": "Heart health, blood pressure, and rhythm care",
  "Dermatology": "Skin, hair, and nail conditions",
  "Pediatrics": "Checkups and care for infants through teens",
  "Neurology": "Migraines, seizures, and nerve conditions",
  "Orthopedics": "Bones, joints, and sports injuries",
  "Dentistry": "Cleanings, fillings, and oral health",
  "Psychiatry": "Mental health and medication management",
  "Gynecology": "Women's health and prenatal care",
  "General Physician": "Everyday illness and preventive care",
  "ENT Specialist": "Ear, nose, and throat conditions",
  "Ophthalmology": "Eye exams and vision care",
  "Endocrinology": "Diabetes, thyroid, and hormone care"
};

function specialtyCount(name) {
  return DOCTORS.filter(d => d.specialty === name).length;
}

function renderSpecialtyGrid() {
  const grid = document.getElementById("specialty-grid");
  if (!grid) return;
  grid.innerHTML = SPECIALTIES.slice(0, 8).map(name => `
    <a href="doctors.html?specialty=${encodeURIComponent(name)}" class="specialty-card">
      <span class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SPECIALTY_ICONS[name] || ""}</svg></span>
      <h3>${name}</h3>
      <p>${SPECIALTY_DESCRIPTIONS[name] || ""}</p>
      <span class="count">${specialtyCount(name)} doctors available</span>
    </a>
  `).join("");
}

function populateSelectOptions() {
  const specSelect = document.getElementById("s-specialty");
  const locSelect = document.getElementById("s-location");
  if (specSelect) {
    SPECIALTIES.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s; opt.textContent = s;
      specSelect.appendChild(opt);
    });
  }
  if (locSelect) {
    LOCATIONS.forEach(l => {
      const opt = document.createElement("option");
      opt.value = l; opt.textContent = l;
      locSelect.appendChild(opt);
    });
  }
}

function doctorCardHTML(doc) {
  return `
    <a href="doctor-profile.html?id=${doc.id}" class="doctor-card">
      <div class="doc-photo">
        <img src="${doc.photo}" alt="${doc.name}">
        <span class="avail-pill ${doc.availableToday ? "" : "busy"}">${doc.availableToday ? "Available today" : "Next: " + doc.nextSlot}</span>
      </div>
      <div class="doc-body">
        <h3>${doc.name}</h3>
        <span class="specialty">${doc.specialty}</span>
        <div class="doc-meta">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${doc.location}</span>
          <span>${doc.experience} yrs exp.</span>
        </div>
        <div class="flex-between">
          <div class="rating">${starIcons(1)} ${doc.rating} <span style="color:var(--ink-faint); font-weight:400;">(${doc.reviews})</span></div>
        </div>
        <div class="doc-footer">
          <div class="fee">$${doc.fee}<span>per visit</span></div>
          <span class="btn btn-outline btn-sm">Book now</span>
        </div>
      </div>
    </a>
  `;
}

function renderFeaturedDoctors() {
  const grid = document.getElementById("featured-doctors");
  if (!grid) return;
  const top = [...DOCTORS].sort((a, b) => b.rating - a.rating).slice(0, 3);
  grid.innerHTML = top.map(doctorCardHTML).join("");
}

renderSpecialtyGrid();
populateSelectOptions();
renderFeaturedDoctors();
