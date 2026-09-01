/* ==========================================================================
   MediCare Hub — Patient dashboard logic
   ========================================================================== */

(function () {
  const nameEl = document.getElementById("dp-name");
  if (!nameEl) return;

  document.getElementById("welcome-heading").textContent = `Welcome back, ${CURRENT_PATIENT.name.split(" ")[0]}`;
  document.getElementById("dp-photo").src = CURRENT_PATIENT.photo;
  nameEl.textContent = CURRENT_PATIENT.name;
  document.getElementById("dp-since").textContent = "Member since " + CURRENT_PATIENT.memberSince;

  const upcoming = APPOINTMENTS.filter(a => a.status === "upcoming");
  const completed = APPOINTMENTS.filter(a => a.status === "completed");
  const uniqueDoctors = new Set(APPOINTMENTS.map(a => a.doctorId));

  document.getElementById("stat-upcoming").textContent = upcoming.length;
  document.getElementById("stat-completed").textContent = completed.length;
  document.getElementById("stat-doctors").textContent = uniqueDoctors.size;

  const nextEl = document.getElementById("next-appointment");
  if (upcoming.length) {
    const appt = upcoming[0];
    const doc = getDoctorById(appt.doctorId);
    nextEl.innerHTML = `
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
        <span class="tag">${appt.type}</span>
        <div class="appt-actions">
          <a href="doctor-profile.html?id=${doc.id}" class="btn btn-outline btn-sm">View doctor</a>
        </div>
      </div>
    `;
  } else {
    nextEl.innerHTML = `<div class="empty-state" style="padding:30px;"><h3>No upcoming appointments</h3><p>Ready for your next visit?</p><a href="doctors.html" class="btn btn-primary btn-sm" style="margin-top:14px;">Find a doctor</a></div>`;
  }

  document.getElementById("save-profile-btn").addEventListener("click", () => {
    showToast("Profile changes saved.");
  });

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }
})();
