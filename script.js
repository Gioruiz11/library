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

 // Book is created and added to myLibrary array
function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let haveRead = document.getElementById("haveread").checked;
    let epicBook = new Book(title, author, pages, haveRead);
    myLibrary.push(epicBook);
}


// Adds book to the page
function printBooks(index){
    // create one book
    let div = document.getElementsByClassName("bookarea")[0];
    let newBook = document.createElement("div");
    newBook.classList.add(`book${index}`);

    // printed book information
    let title = document.createElement("p");
    let titleText = document.createTextNode("title: " + myLibrary[index].title);
    let author = document.createElement("p");
    let authorText = document.createTextNode("author: " + myLibrary[index].author);
    let pages = document.createElement("p");
    let pagesText = document.createTextNode("Number of pages: " + myLibrary[index].pages);

    // Add have read checkbox
    let read = document.createElement("p");
    let readInput = document.createElement("input");
    readInput.setAttribute("type", "checkbox");

    if(myLibrary[index].haveRead == true){
        readInput.setAttribute("checked", "");
    }
    let readText = document.createTextNode("have read: ");

    // add remove button
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.id = "remove";
    

    // adding to the DOM
    title.appendChild(titleText);
    newBook.appendChild(title);
    author.appendChild(authorText);
    newBook.appendChild(author);
    pages.appendChild(pagesText);
    newBook.appendChild(pages);
    read.appendChild(readText);
    read.appendChild(readInput);
    newBook.appendChild(read);
    newBook.appendChild(remove);

    div.appendChild(newBook);

    // remove book from DOM and library array
    remove.addEventListener("click", () => {
        myLibrary.splice(index,1);
        let book = document.getElementsByClassName(`book${index}`)[0]
        book.remove();
    } )

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

// on submit click, add book to library and print it on page
let index = 0;
submit.onclick = function(event){
    event.preventDefault();
    addBookToLibrary();
    printBooks(index);
    index++;
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