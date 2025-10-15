let search_button = document.getElementById("search-button");
let search_input = document.getElementById("search-input");

search_button.addEventListener("click", function () {
  if (search_input.style.display === "none") {
    search_input.style.display = "block";
  } else {
    search_input.style.display = "none";
  }
});
