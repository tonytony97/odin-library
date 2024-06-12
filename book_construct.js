//Capitalize first letter in Constructor function name
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

const dune = new CreateBook("Dune", "Frank Herbert", 300, "not read yet");

console.log(dune.info());
console.log(Object.getPrototypeOf(dune) === createBook.prototype);
console.log(dune.valueOf());
