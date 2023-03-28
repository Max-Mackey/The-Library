// Add book functionality to create pop up with forms, and gray out page for focus
var button = document.getElementById("addButton");
var popup = document.getElementById("popup");
var closeButton = document.getElementById("close");

button.onclick = function () {
  popup.style.display = "block";
  overlay.style.display = "block";
};
closeButton.onclick = function () {
  popup.style.display = "none";
  overlay.style.display = "none";
};

let myLibrary = [];
function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

console.log(title);
