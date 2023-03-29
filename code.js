// Add book functionality to create pop up with forms, and gray out page for focus
const button = document.getElementById("addButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close");

button.onclick = function () {
  popup.style.display = "flex";
  overlay.style.display = "block";
};
closeButton.onclick = function () {
  popup.style.display = "none";
  overlay.style.display = "none";
};

//submit button adds all data to a new book and stores within a library array
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //pulls data from form inputs to add to object
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  // Book constructor function
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }
  // library array to store books
  let myLibrary = [];
  // create new book object and add to library array
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  const bookIndex = 0;
  console.log(myLibrary[bookIndex].title);
  const newBook = document.createElement("div");
  newBook.classList.add("book");
  //adds a title to the newBook div
  const newTitle = document.createElement("div");
  newTitle.textContent = `"${book.title}"`;
  newBook.appendChild(newTitle);
  newTitle.classList.add("content");
  //adds an author to the newBook div
  const newAuthor = document.createElement("div");
  newAuthor.textContent = book.author;
  newBook.appendChild(newAuthor);
  newAuthor.classList.add("content");
  //adds the pages to the newBook div
  const newPages = document.createElement("div");
  newPages.textContent = `${book.pages} pages`;
  newBook.appendChild(newPages);
  newPages.classList.add("content");
  // adds a read button to the newBook div
  const readButton = document.createElement("button");
  readButton.textContent = `Have not read`;
  readButton.classList.add("notRead");
  readButton.dataset.index = myLibrary.indexOf(book);
  newBook.appendChild(readButton);
  readButton.addEventListener("click", () => {
    const bookIndex = readButton.dataset.index;
    const book = myLibrary[bookIndex];
    book.read = !book.read;
    if (book.read) {
      readButton.textContent = "Read";
      readButton.classList.add("read");
      readButton.classList.remove("notRead");
    } else {
      readButton.textContent = "Have not read";
      readButton.classList.add("notRead");
      readButton.classList.remove("Read");
    }
  });

  const removeButton = document.createElement("removeButton");
  removeButton.textContent = "Remove Book";
  removeButton.dataset.index = myLibrary.indexOf(book);
  newBook.appendChild(removeButton);
  removeButton.classList.add("removeButton");
  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    newBook.remove();
  });

  //adds the new book to the centered book div on web page
  const booksDiv = document.querySelector(".books");
  booksDiv.appendChild(newBook);

  // closes form box and returns page to normal state
  popup.style.display = "none";
  overlay.style.display = "none";
  // clears form fields for next submission
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
});
