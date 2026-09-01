/* ==========================================================================
   MediCare Hub — Doctor profile page logic
   ========================================================================== */

(function () {
  const heroEl = document.getElementById("profile-hero");
  if (!heroEl) return;

  const params = new URLSearchParams(window.location.search);
  const doc = getDoctorById(params.get("id")) || DOCTORS[0];

  document.title = `${doc.name} — ${doc.specialty} | MediCare Hub`;
  document.getElementById("crumb-name").textContent = doc.name;

  heroEl.innerHTML = `
    <img src="${doc.photo}" alt="${doc.name}">
    <div>
      <h1>${doc.name} ${doc.verified ? '<svg style="width:20px;height:20px;color:var(--primary);display:inline;vertical-align:middle;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 1.9 3-.5 1 2.9 2.9 1-.5 3L23 12l-1.9 2.4.5 3-2.9 1-1 2.9-3-.5L12 22l-2.4-1.9-3 .5-1-2.9-2.9-1 .5-3L1 12l1.9-2.4-.5-3 2.9-1 1-2.9 3 .5z"/><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ""}</h1>
      <div class="specialty">${doc.specialty}</div>
      <div class="meta-row">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${doc.location}</span>
        <span>${doc.experience} years experience</span>
        <div class="rating">${starIcons(1)} ${doc.rating} <span style="color:var(--ink-faint); font-weight:400;">(${doc.reviews} reviews)</span></div>
      </div>
      <div class="tags-row">
        ${doc.types.map(t => `<span class="tag">${t}</span>`).join("")}
        <span class="tag outline">${doc.nextSlot}</span>
      </div>
    </div>
    <div class="profile-side">
      <div class="fee-block"><span>Consultation fee</span>$${doc.fee}</div>
    </div>
  `;

  document.getElementById("doc-bio").textContent = doc.bio;
  document.getElementById("doc-education").innerHTML = doc.education.map(e => `<li>${e}</li>`).join("");
  document.getElementById("doc-languages").innerHTML = doc.languages.map(l => `<span class="tag outline">${l}</span>`).join("");
  document.getElementById("loc-name").textContent = doc.location;
  document.getElementById("loc-city").textContent = doc.city;
  document.getElementById("loc-types").textContent = doc.types.join(", ");
  document.getElementById("book-btn").href = `booking.html?id=${doc.id}`;

  // Tabs
  document.querySelectorAll(".tab-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-nav button").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  // Reviews (mock, generated from doctor's reputation)
  const reviewSamples = [
    { name: "Alicia R.", days: "2 weeks ago", text: "Explained everything clearly and never felt rushed. Would book again.", stars: 5, photo: "https://randomuser.me/api/portraits/women/25.jpg" },
    { name: "Ben T.", days: "1 month ago", text: "Appointment started right on time and the video call quality was excellent.", stars: 5, photo: "https://randomuser.me/api/portraits/men/61.jpg" },
    { name: "Michael D.", days: "1 month ago", text: "Good visit overall, though the waiting room was a bit busy that day.", stars: 4, photo: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Sofia K.", days: "2 months ago", text: "Very thorough — followed up with a written care plan the same evening.", stars: 5, photo: "https://randomuser.me/api/portraits/women/71.jpg" }
  ];
  document.getElementById("reviews-summary").innerHTML = `${starIcons(1)} ${doc.rating} <span style="color:var(--ink-faint); font-weight:400;">(${doc.reviews})</span>`;
  document.getElementById("reviews-list").innerHTML = reviewSamples.map(r => `
    <div class="review-item">
      <div class="person">
        <img src="${r.photo}" alt="">
        <div><b>${r.name}</b><span class="date">${r.days}</span></div>
      </div>
      <div class="stars">${starIcons(r.stars)}</div>
      <p>${r.text}</p>
    </div>
  `).join("");

  // Mini calendar preview (next 5 days)
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let calHTML = "";
  const today = new Date();
  for (let i = 0; i < 5; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    calHTML += `<div class="date-chip ${i === 0 ? "selected" : ""}"><span>${days[d.getDay()]}</span><b>${d.getDate()}</b></div>`;
  }
  document.getElementById("mini-calendar").innerHTML = calHTML;
})();
