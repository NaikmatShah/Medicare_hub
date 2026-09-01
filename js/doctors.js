/* ==========================================================================
   MediCare Hub — Doctor listing page logic
   ========================================================================== */

(function () {
  const resultsGrid = document.getElementById("doctor-results");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("doc-search");
  const sortSelect = document.getElementById("sort-select");
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  const availableTodayBox = document.getElementById("available-today");
  const specialtyFiltersEl = document.getElementById("specialty-filters");
  const locationFiltersEl = document.getElementById("location-filters");

  if (!resultsGrid) return; // not on this page

  const params = new URLSearchParams(window.location.search);

  // Build specialty + location checkbox filters dynamically
  specialtyFiltersEl.innerHTML = SPECIALTIES.map(s => `
    <label class="check-row"><input type="checkbox" name="specialty" value="${s}" ${params.get("specialty") === s ? "checked" : ""}> ${s}</label>
  `).join("");

  locationFiltersEl.innerHTML = LOCATIONS.map(l => `
    <label class="check-row"><input type="checkbox" name="location" value="${l}" ${params.get("location") === l ? "checked" : ""}> ${l}</label>
  `).join("");

  function getChecked(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
  }

  function applyFilters() {
    const query = (searchInput.value || "").toLowerCase().trim();
    const specialties = getChecked("specialty");
    const locations = getChecked("location");
    const types = getChecked("type");
    const minRating = Number(document.querySelector('input[name="rating"]:checked').value);
    const maxPrice = Number(priceRange.value);
    const todayOnly = availableTodayBox.checked;

    let list = DOCTORS.filter(d => {
      if (query && !(d.name.toLowerCase().includes(query) || d.specialty.toLowerCase().includes(query))) return false;
      if (specialties.length && !specialties.includes(d.specialty)) return false;
      if (locations.length && !locations.includes(d.location)) return false;
      if (types.length && !types.some(t => d.types.includes(t))) return false;
      if (d.rating < minRating) return false;
      if (d.fee > maxPrice) return false;
      if (todayOnly && !d.availableToday) return false;
      return true;
    });

    switch (sortSelect.value) {
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "price-low": list.sort((a, b) => a.fee - b.fee); break;
      case "price-high": list.sort((a, b) => b.fee - a.fee); break;
      case "experience": list.sort((a, b) => b.experience - a.experience); break;
      default: list.sort((a, b) => (b.availableToday - a.availableToday) || (b.rating - a.rating));
    }

    resultCount.textContent = `Showing ${list.length} doctor${list.length !== 1 ? "s" : ""}`;
    resultsGrid.style.display = list.length ? "grid" : "none";
    emptyState.style.display = list.length ? "none" : "block";
    resultsGrid.innerHTML = list.map(doctorCardHTML).join("");
  }

  priceRange.addEventListener("input", () => {
    priceValue.textContent = "$" + priceRange.value;
    applyFilters();
  });
  searchInput.addEventListener("input", applyFilters);
  sortSelect.addEventListener("change", applyFilters);
  availableTodayBox.addEventListener("change", applyFilters);
  document.body.addEventListener("change", (e) => {
    if (["specialty", "location", "type", "rating"].includes(e.target.name)) applyFilters();
  });

  document.getElementById("clear-filters").addEventListener("click", () => {
    document.querySelectorAll('.filters-panel input[type="checkbox"]').forEach(el => el.checked = false);
    document.querySelector('input[name="rating"][value="0"]').checked = true;
    priceRange.value = 130;
    priceValue.textContent = "$130";
    searchInput.value = "";
    applyFilters();
  });

  document.getElementById("filter-toggle").addEventListener("click", () => {
    document.getElementById("filters-panel").classList.toggle("open");
  });

  // Apply query params from homepage search bar / specialty cards
  if (params.get("type")) {
    const box = document.querySelector(`input[name="type"][value="${params.get("type")}"]`);
    if (box) box.checked = true;
  }

  applyFilters();
})();
