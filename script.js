const cards = document.querySelector("#book-cards");
let form = document.querySelector("#book-form");
let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function createCard(book) {
    let card = document.createElement("div");
    card.className = "book-card";

    let text = document.createTextNode(`${book.title} by ${book.author} - no. of pages: ${book.pages} - ${book.isRead ? 'Read' : 'Not read'}`);
    card.appendChild(text);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "X";
    card.appendChild(deleteButton);
    
    cards.appendChild(card);
    return card;
}

function displayLibrary() {
   cards.innerHTML = "";
    myLibrary.forEach(element => {
        let card = createCard(element);
        let button = card.getElementsByClassName("delete-btn")[0];
        button.onclick = () => {
            card.remove();
            myLibrary.splice(myLibrary.indexOf(element), 1);
        }
    });
}

document.querySelector("#add-book-btn").onclick = () => {
    if (form.className === "hidden") {
        form.classList.toggle("hidden");
    }
};

document.querySelector("#submit-book-btn").onclick = () => {
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-pages").value;
    let isRead = document.querySelector('input[name="is-finished"]:checked').value;
    if (title)
    addBookToLibrary(title, author, pages, isRead);
    form.classList.toggle("hidden");
    form.reset();
    displayLibrary();
}