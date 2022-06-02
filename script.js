/* DOM elements*/
const modal = document.querySelector(".modalContainer");
/* buttons */
const addBook = document.querySelector(".addBook");
const readBook = document.querySelector(".readBook");
const deleteBook = document.querySelector(".deleteBook");
const submitBook = document.querySelector(".submitButton");
addBook.addEventListener("click", activeModal);











function activeModal(){
    modal.classList.add("modalActive");
}