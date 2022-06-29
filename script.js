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
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let haveRead = document.getElementById("haveread").value;
    let epicBook = new Book(title, author, pages, haveRead);
    myLibrary.push(epicBook);
}

function printBooks(){
    let div = document.getElementsByClassName("bookarea")[0];
    let newBook = document.createElement("div");
    newBook.classList.add("book");
    let title = document.createElement("p");

    //let result = ""
    //for(let book of myLibrary) {
     //   result += book.info() + " | ";
   // }
   // alert(result)
}



// modal work
let modal = document.getElementsByClassName("modal")[0];
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit");

// open modal on button click
btn.onclick = function(){
    modal.style.display = "block";
}

submit.onclick = function(event){
    event.preventDefault();
    addBookToLibrary();
    printBooks();
}

// close modal on (x) click
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}