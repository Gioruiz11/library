let myLibrary = [];

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function(){
        let info = this.title + ", " + this.author + ", " + this.pages + ", " + this.haveRead;
        return info;
    }
}


function addBookToLibrary(){
    // TODO: when new book button is pressed, show input screen to input information,
    // save information and make new book with it. 
    let epicBook = new Book(title, author, pages, haveRead);
    myLibrary.push(epicBook);
}

function printBooks(){
    let result = ""
    for(let book of myLibrary) {
        result += book.info() + ", ";
    }
    alert(result)
}


addBookToLibrary();
addBookToLibrary();
printBooks();