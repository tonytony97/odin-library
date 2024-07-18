const myLibrary = [];

//Construct 'Book' object, capitalize first letter of constructor function
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
function addBookToLibrary(title, author, page_num, was_read) {
    //Create new object with input values
    const book = new CreateBook(title, author, page_num, was_read);
    //Insert object into myLibrary array
    myLibrary.push(book);
}

function showLibrary() {
    for (const i of myLibrary) {
        bookSpace = document.createElement("p");
        bookDiv1 = document.createElement("div");
        bookDiv2 = document.createElement("div");
        bookTitle = document.createTextNode(`Book Name: ${i.title}`);
        bookAuthor = document.createTextNode(`Author: ${i.author}`);
        bookPages = document.createTextNode(`Pages: ${i.page_num}`);
        bookLabel = document.createElement("label");
        bookReadText = document.createTextNode("Read?");
        bookRead = document.createElement("input");
        bookRead.setAttribute("type", "checkbox");
        bookRead.checked = i.was_read;
        bookSpace.appendChild(bookTitle);
        bookDiv1.appendChild(bookAuthor);
        bookSpace.appendChild(bookDiv1);
        bookDiv2.appendChild(bookPages);
        bookSpace.appendChild(bookDiv2);
        bookLabel.appendChild(bookReadText);
        bookLabel.appendChild(bookRead);
        bookSpace.appendChild(bookLabel);
    }
    bookViewer.appendChild(bookSpace);
    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(bookPages);
    console.log(bookRead);
}

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
const bookViewer = document.querySelector("#book-container");

addBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

bookDialog.addEventListener("submit", (e) => {
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
    addBookToLibrary(
        inputBook.value,
        inputAuthor.value,
        inputPage.value,
        inputRead.checked,
    );
    //Clear form inputs
    showLibrary();
    document.getElementById("form-book").reset();
});

submitBtn.addEventListener("submit", (event) => {
    //Prevent POST of form data
    event.preventDefault();
    console.log();
    //Close modal and submit inputs
    bookDialog.close(
        inputBook.value,
        inputAuthor.value,
        inputPage.value,
        inputRead.checked,
    );
});

/* CreateBook test
const dune = new CreateBook("Dune", "Frank Herbert", 300, "not read yet");

console.log(dune.info());
console.log(Object.getPrototypeOf(dune) === CreateBook.prototype);
console.log(dune.valueOf());
*/
