//Capitalize first letter in Constructor function name

const myLibrary = [];

function CreateBook(title, author, page_num, was_read) {
    this.title = title;
    this.author = author;
    this.page_num = page_num;
    this.was_read = was_read;
    this.info = function () {
        return (
            this.title +
            " by " +
            this.author +
            ", " +
            this.page_num +
            " pages" +
            ", " +
            this.was_read
        );
    };
}
function addBookToLibrary() {}

const addBookBtn = document.getElementById("add-book");
const bookDialog = document.getElementById("dialog-book");
const submitBtn = bookDialog.querySelector("#submit-book");
const outputBook = document.querySelector("#out-book");
const outputAuthor = document.querySelector("#out-author");
const outputPage = document.querySelector("#out-page");
const outputRead = document.querySelector("#out-read");
const inputBook = bookDialog.querySelector("#input-book");
const inputAuthor = bookDialog.querySelector("#input-author");
const inputPage = bookDialog.querySelector("#input-page");
const inputRead = bookDialog.querySelector("#cb-read");

addBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

bookDialog.addEventListener("close", (e) => {
    outputBook.value =
        inputBook.value === ""
            ? "No return value."
            : `Book Name: ${inputBook.value}.`;
    outputAuthor.value =
        inputAuthor.value === ""
            ? "No return value."
            : `Author Name: ${inputAuthor.value}.`;
    outputPage.value =
        inputPage.value === ""
            ? "No return value."
            : `Page Count: ${inputPage.value} Pages.`;
    outputRead.value =
        inputRead.value === ""
            ? "No return value."
            : `Read?: ${inputRead.checked}.`;
    document.getElementById("form-book").reset();
});

submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log();
    bookDialog.close(inputBook.value, inputAuthor.value);
});

/* CreateBook test
const dune = new CreateBook("Dune", "Frank Herbert", 300, "not read yet");

console.log(dune.info());
console.log(Object.getPrototypeOf(dune) === CreateBook.prototype);
console.log(dune.valueOf());
*/
