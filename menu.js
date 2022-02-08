const hamb    = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav-menu");

hamb.addEventListener("click", () =>  {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
}); 