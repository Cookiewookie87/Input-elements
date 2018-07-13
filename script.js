const dropdownInput = document.querySelectorAll(".dropdown-input");
const dropdownInputArr = Array.from(document.querySelectorAll(".dropdown-input"));
const dropdownList = document.querySelectorAll("ul");
const dropdownListArr = Array.from(document.querySelectorAll("ul"));
const currentListItems = document.querySelectorAll("li");
let indexCurrentInput;

dropdownInput.forEach(input => input.addEventListener("click", openDropdown));
dropdownInput.forEach(input => input.addEventListener("focus", openDropdown));
dropdownInput.forEach(input => input.addEventListener("focusout", closeDropdown));
currentListItems.forEach(item => item.addEventListener("mousedown", listItemClick));
currentListItems.forEach(item => item.addEventListener("mouseover", listItemHover));
currentListItems.forEach(item => item.addEventListener("mouseout", listItemHoverOut));

function openDropdown() {
    indexCurrentInput = dropdownInputArr.indexOf(this);

    dropdownList.item(indexCurrentInput).classList.add("activeList");

    //console.log(dropdownInput.item(indexCurrentInput));
    //console.log(dropdownList.item(indexCurrentInput));
    //console.log(dropdownInput.item(indexCurrentInput).textContent);
    //console.log(dropdownList.item(indexCurrentInput));
    //console.log(dropdownList.item(indexCurrentInput).querySelectorAll("li"));
}
function closeDropdown(e) {
    e.target.nextElementSibling.nextElementSibling.classList.remove("activeList");
}
function listItemHover() {
    this.classList.add("hoverList");
}
function listItemHoverOut() {
    this.classList.remove("hoverList");
}
function listItemClick() {
    const currentInput = dropdownInput.item(indexCurrentInput);
    const listItems = dropdownList.item(indexCurrentInput).querySelectorAll("li");

    if (this.textContent !== "Clear") {
        currentInput.textContent = this.textContent;
        clearDropdownSelections(listItems);
        currentInput.classList.add("active-input");
        this.classList.add("active-item");
    } else {
        currentInput.textContent = "Select item";
        currentInput.classList.remove("active-input");
        this.classList.remove("active-item");
        clearDropdownSelections(listItems);
    }
}

function clearDropdownSelections(listItems) { 
    listItems.forEach(function(item) {
        if (item.classList.contains("active-item")) { 
            item.classList.remove("active-item");
        }
    });
}