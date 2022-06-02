/* DOM elements*/
const modal = document.querySelector(".modalContainer");
/* buttons */
const addBook = document.querySelector(".addBook");
const readBook = document.querySelector(".readBook");
const deleteBook = document.querySelector(".deleteBook");
const submitBook = document.querySelector(".submitButton");
const backButton = document.querySelector(".backButton");
addBook.addEventListener("click", activeModal);
backButton.addEventListener("click", unactiveModal);








function unactiveModal(){
    modal.classList.remove("modalActive");
}

function activeModal(){
    modal.classList.add("modalActive");
}