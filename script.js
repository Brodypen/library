/* DOM elements*/
const modal = document.querySelector(".modalContainer");
/* buttons */
const addBookButton = document.querySelector(".addBook");
const bookForm = document.querySelector(".bookForm");
const backButton = document.querySelector(".backButton");

const bookGrid = document.querySelector(".bookGrid");
let myLibrary = [];
class Book {
  constructor(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
  }
}

const addBook = (e) => {
  e.preventDefault();
  const book = makeBook();
  myLibrary.push(book);
  unactiveModal();
  updateBooks();
};
const displayBooks = (book) => {
  console.log(book);
  const bookContainer = document.createElement("div");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const readBook = document.createElement("button");
  const deleteBook = document.createElement("button");

  bookContainer.classList.add("bookContainer");
  bookTitle.classList.add("bookTitle");
  bookAuthor.classList.add("bookAuthor");
  bookPages.classList.add("bookPages");
  readBook.classList.add("readBook");
  deleteBook.classList.add("deleteBook");
  /* TODO: ADD READBOOK AND DELETEBOOK BELOW*/
  readBook.onclick = toggleFinished;
  deleteBook.onclick = deleteBooks;

  bookTitle.textContent = `"${book.title}"`;
  bookAuthor.textContent = `By ${book.author}`;
  bookPages.textContent = `${book.pages} Pages`;
  console.log(book.finished);
  if (book.finished) {
    readBook.textContent = "Finished";
  } else {
      readBook.classList.add("unfinished");
    readBook.textContent = "Not Finished";
  }
  deleteBook.textContent = "Delete";

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(readBook);
  bookContainer.appendChild(deleteBook);
  bookGrid.appendChild(bookContainer);
};
const updateBooks = () => {
  bookGrid.innerHTML = "";
  for (let book of myLibrary) {
    displayBooks(book);
  }
};
const toggleFinished = (e) => {
  const bookTitle = e.target.parentNode.firstChild.innerHTML.slice(1,-1);
    const book = myLibrary.find(book => book.title === bookTitle);
    book.finished = !book.finished;
    console.log(book);
  updateBooks();
};
const deleteBooks = (e) => {
     const bookTitle = e.target.parentNode.firstChild.innerHTML.slice(1, -1);
     myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
     updateBooks();
}
function makeBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const finished = document.getElementById("isFinished").checked;
  return new Book(title, author, pages, finished);
}

function unactiveModal() {
  modal.classList.remove("modalActive");
}

function activeModal() {
  bookForm.reset();
  modal.classList.add("modalActive");
}
addBookButton.addEventListener("click", activeModal);
backButton.addEventListener("click", unactiveModal);
bookForm.addEventListener("submit", addBook);
