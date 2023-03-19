let myLibrary = [];

const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const bookContainer = document.getElementById("book-container");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const isRead = form.isRead.checked;

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const isRead = readInput.value;

  const newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("book-title");
  titleElement.textContent = title;
  newBookCard.appendChild(titleElement);

  const authorElement = document.createElement("p");
  authorElement.classList.add("book-author");
  authorElement.textContent = author;
  newBookCard.appendChild(authorElement);

  const pagesElement = document.createElement("p");
  pagesElement.classList.add("book-pages");
  pagesElement.textContent = pages;
  newBookCard.appendChild(pagesElement);

  const isReadElement = document.createElement("button");
  isReadElement.classList.add("read-status-btn");
  isReadElement.textContent = readInput.checked ? "read" : "unread";
  newBookCard.appendChild(isReadElement);

  bookContainer.appendChild(newBookCard);

  

  // clear the input fields after submitting
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
});

