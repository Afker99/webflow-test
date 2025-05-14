const header = document.querySelector(".header");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  header.textContent = "Hello!";
});
