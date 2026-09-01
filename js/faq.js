(function () {
  const cats = document.getElementById("faq-categories");
  if (!cats) return;
  cats.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      cats.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      document.querySelectorAll("#faq-list .faq-item").forEach(item => {
        item.style.display = (cat === "all" || item.dataset.cat === cat) ? "block" : "none";
      });
    });
  });
})();
