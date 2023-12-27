let up = document.querySelector(".up");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 1000) {
    up.classList.add("right");
  } else {
    up.classList.remove("right");
  }
  up.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
