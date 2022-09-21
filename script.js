const toggleBtns = document.querySelectorAll(".toggle");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const navList = document.querySelector("#navList");
const navLinks = document.querySelectorAll(".nav-link");

const toggle = () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  navList.classList.toggle("closed");
};

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggle();
    if (openBtn.classList.contains("hide")) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggle();
    document.body.style.overflowY = "visible";
  });
});
