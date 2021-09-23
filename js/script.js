let input = document.querySelector(".email-text-copy");
document.querySelector(".icon-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  document.querySelector(".alert").classList.add("active");
  setTimeout(function () {
    document.querySelector(".alert").classList.remove("active");
  }, 1500);
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("header-scrolled", window.scrollY > 0);
});

// Animations
