/* DOM elements*/
const modal = document.querySelector(".modalContainer");
/* buttons */
const addBookButton = document.querySelector(".addBook");
const readBook = document.querySelector(".readBook");
const deleteBook = document.querySelector(".deleteBook");
const bookForm = document.querySelector(".bookForm");
const backButton = document.querySelector(".backButton");

const bookGrid = document.querySelector(".bookGrid");
let myLibrary = [];
class Book {
  constructor(title, author, page, finished) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.finished = finished;
  }
}


const addBook = (e) => {
    e.preventDefault();
    const book = makeBook();
    myLibrary.push(book);
    unactiveModal();
    updateBooks();
}
const displayBooks = (book)=>{
      <div class="bookContainer">
        <p class="bookTitle">Hey </p>
        <p class="bookAuthor">Brody</p>
        <p class="bookPages">10</p>
        <button class="readBook">Finished</button>
        <button class="deleteBook">Delete</button>
      </div>;
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('p');
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
}
const updateBooks = () => {
    bookGrid.innerHTML = '';
    for(let book of myLibrary){
        displayBooks(book);
    }
}

function makeBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isFinished = document.getElementById("isFinished").checked;
    return new Book(title,author,pages,isFinished);
}

function unactiveModal(){
    modal.classList.remove("modalActive");
}

function activeModal(){
    bookForm.reset();
    modal.classList.add("modalActive");
}
addBookButton.addEventListener("click", activeModal);
backButton.addEventListener("click", unactiveModal);
bookForm.addEventListener("submit", addBook);