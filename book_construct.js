const myLibrary = [];

//Construct 'Book' object, capitalize first letter of constructor function
function CreateBook(title, author, page_num, was_read, index_num) {
    this.title = title;
    this.author = author;
    this.page_num = page_num;
    this.was_read = was_read;
    this.index_num = index_num;
}

function addBookToLibrary(title, author, page_num, was_read, index_num) {
    //Create new object with input values
    const book = new CreateBook(title, author, page_num, was_read, index_num);
    //Insert object into myLibrary array
    myLibrary.push(book);
}

function showLibrary() {
    for (const i of myLibrary) {
        bookSpace = document.createElement("p");
        bookDiv1 = document.createElement("div");
        bookDiv2 = document.createElement("div");
        bookDiv3 = document.createElement("div");
        bookTitle = document.createTextNode(`Book Name: ${i.title}`);
        bookAuthor = document.createTextNode(`Author: ${i.author}`);
        bookPages = document.createTextNode(`Pages: ${i.page_num}`);
        bookLabel = document.createElement("label");
        bookReadTxt = document.createTextNode("Read?");
        bookRead = document.createElement("input");
        bookRead.setAttribute("type", "checkbox");
        bookRead.checked = i.was_read;
        delTxt = document.createTextNode("Delete Book!");
        delBtn = document.createElement("button");

        //Remove parent element from display and splice array
        delBtn.onclick = function () {
            n = i.index_num;
            if (myLibrary[n + 1] === undefined) {
                myLibrary.splice(n, 1);
                this.parentElement.style.display = "none";
                console.log(myLibrary);
            } else {
                myLibrary[n + 1].index_num -= 1;
                myLibrary.splice(n, 1);
                this.parentElement.style.display = "none";
                console.log(myLibrary);
            }
        };
        bookSpace.appendChild(bookTitle);
        bookDiv1.appendChild(bookAuthor);
        bookSpace.appendChild(bookDiv1);
        bookDiv2.appendChild(bookPages);
        bookSpace.appendChild(bookDiv2);
        bookLabel.appendChild(bookReadTxt);
        bookLabel.appendChild(bookRead);
        bookDiv3.appendChild(bookLabel);
        bookSpace.appendChild(bookDiv3);
        delBtn.appendChild(delTxt);
        bookSpace.appendChild(delBtn);
    }
    bookContainer.appendChild(bookSpace);
}

const addBookBtn = document.getElementById("add-book");
const bookDialog = document.getElementById("dialog-book");
const submitBtn = bookDialog.querySelector("#submit-book");
const inputBook = bookDialog.querySelector("#input-book");
const inputAuthor = bookDialog.querySelector("#input-author");
const inputPage = bookDialog.querySelector("#input-page");
const inputRead = bookDialog.querySelector("#cb-read");
const bookContainer = document.querySelector("#book-container");

addBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

bookDialog.addEventListener("submit", () => {
    addBookToLibrary(
        inputBook.value,
        inputAuthor.value,
        inputPage.value,
        inputRead.checked,
        myLibrary.length,
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
