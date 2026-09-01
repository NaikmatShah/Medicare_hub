/* ==========================================================================
   MediCare Hub — Appointment history logic
   ========================================================================== */

(function () {
  const listEl = document.getElementById("appt-list");
  if (!listEl) return;

  document.getElementById("dp-photo").src = CURRENT_PATIENT.photo;
  document.getElementById("dp-name").textContent = CURRENT_PATIENT.name;
  document.getElementById("dp-since").textContent = "Member since " + CURRENT_PATIENT.memberSince;

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  }

  function render(status) {
    const filtered = status === "all" ? APPOINTMENTS : APPOINTMENTS.filter(a => a.status === status);
    document.getElementById("appt-empty").style.display = filtered.length ? "none" : "block";
    listEl.innerHTML = filtered.map(appt => {
      const doc = getDoctorById(appt.doctorId);
      const canManage = appt.status === "upcoming";
      return `
        <div class="appt-item">
          <img src="${doc.photo}" alt="${doc.name}">
          <div class="appt-info">
            <b>${doc.name}</b>
            <span class="spec">${doc.specialty}</span>
          </div>
          <div class="appt-when">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            ${formatDate(appt.date)} · ${appt.time}
          </div>
          <span class="tag outline">${appt.type}</span>
          <span class="appt-status ${appt.status}">${appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}</span>
          <div class="appt-actions">
            ${canManage
              ? `<button class="btn btn-outline btn-sm" data-reschedule="${appt.id}">Reschedule</button><button class="btn btn-ghost btn-sm" data-cancel="${appt.id}">Cancel</button>`
              : `<a href="doctor-profile.html?id=${doc.id}" class="btn btn-outline btn-sm">Book again</a>`}
          </div>
        </div>
      `;
    }).join("");

    listEl.querySelectorAll("[data-cancel]").forEach(btn => {
      btn.addEventListener("click", () => {
        const appt = APPOINTMENTS.find(a => a.id === btn.dataset.cancel);
        if (appt) appt.status = "cancelled";
        showToast("Appointment cancelled.");
        render(document.querySelector(".filter-tabs button.active").dataset.status);
      });
    });
    listEl.querySelectorAll("[data-reschedule]").forEach(btn => {
      btn.addEventListener("click", () => {
        const appt = APPOINTMENTS.find(a => a.id === btn.dataset.reschedule);
        window.location.href = `booking.html?id=${appt.doctorId}`;
      });
    });
  }

  document.querySelectorAll("#status-tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#status-tabs button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.status);
    });
  });

  render("all");
})();
