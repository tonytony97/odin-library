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
const container = document.querySelector("#container");

addBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});

/* CreateBook test
const dune = new CreateBook("Dune", "Frank Herbert", 300, "not read yet");

console.log(dune.info());
console.log(Object.getPrototypeOf(dune) === CreateBook.prototype);
console.log(dune.valueOf());
*/
