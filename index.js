const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  

  
}
addBookToLibrary("Harry Potter", "JK Rowling", "600", "read");

addBookToLibrary("LOTR", "Tolkien", "200", "read");

console.log(myLibrary)


