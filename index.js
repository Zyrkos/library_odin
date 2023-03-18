const myLibrary = [];
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const bookContainer = document.getElementById("book-container");

/* function Book(title, author, pages, isRead) {
  constructor(
    title = 'Unknown';
    author = 'Unknown';
    pages = '0';
    isRead = false;
  ) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
} */

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.value;

  
  const newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");
  newBookCard.innerHTML = `
    <h2 class="book-title">${title}</h2>
    <p class="book-author">${author}</p>
    <p class="book-pages">${pages}</p>
    <p class="book-read">${read}</p>
  `;
  
  bookContainer.appendChild(newBookCard);

  // clear the input fields after submitting
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";


})

/* function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  

  
} */



