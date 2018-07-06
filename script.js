const dropdownInput = document.querySelectorAll(".dropdown-input");

dropdownInput.forEach(input => input.addEventListener("click", openDropdown));


function openDropdown() { 
    console.log(this);
}