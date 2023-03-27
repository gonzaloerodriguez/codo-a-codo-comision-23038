const d = document;

const navSlide = (panelBtn, panel) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn}`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  navSlide(".btn-panel", ".panel");
});
