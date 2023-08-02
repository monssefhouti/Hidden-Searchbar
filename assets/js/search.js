let searchBtn = document.querySelector(".search__btn");
let searchContainer = document.querySelector(".search");
let searchInput = document.querySelector(".search__input");

searchBtn.addEventListener("click", (e) => {
  searchContainer.classList.toggle("active");
  searchInput.focus();
});
