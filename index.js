const myLibrary = [];
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const bookContainer = document.getElementById("book-container");

function Book(title, author, pages, isRead) {
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
}



function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  

  
}
addBookToLibrary("Harry Potter", "JK Rowling", "600", "read");

addBookToLibrary("LOTR", "Tolkien", "200", "read");

console.log(myLibrary)


