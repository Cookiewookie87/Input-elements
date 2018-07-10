const dropdownInput = document.querySelectorAll(".dropdown-input");
const dropdownList = document.querySelectorAll(".dropdown-list");

dropdownInput.forEach(input => input.addEventListener("click", openDropdown));
dropdownInput.forEach(input => input.addEventListener("focusout", closeDropdown));

function openDropdown() {
    this.nextElementSibling.nextElementSibling.classList.toggle("active");
}
function closeDropdown() {
    this.nextElementSibling.nextElementSibling.classList.remove("active");
}