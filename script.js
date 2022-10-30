
// *** Create books and add to myLibrary array
let myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = myLibrary.length;
	this.createCard();
}

	createCard() {
	// *** Create elements of card
	this.card = document.createElement('div');
	this.cardTitle = document.createElement('div');
	this.cardAuthor = document.createElement('div');
	this.cardPages = document.createElement('div');
	this.cardIconContainer = document.createElement('div')
	this.cardReadStatusContainer = document.createElement('div');
	this.cardReadStatusIcon = document.createElement('i');
	this.cardReadStatus = document.createElement('p');
	this.cardDeleteIcon = document.createElement("i");

	// *** Add classes
	this.card.classList.add('card');
	this.cardTitle.classList.add('title');
	this.cardDeleteIcon.classList.add('delete')

	// *** Add content
	this.cardTitle.textContent = this.title;
	this.cardAuthor.textContent = this.author;
	this.cardPages.textContent = this.pages + ' Pages';

	// *** Set read status ****** LOOK AT LATER
	// this.readStatus ? this.setAsRead() : this.setAsUnread();

	// *** Add icons
	this.cardReadStatusIcon.classList.add('fa-solid');
	this.cardReadStatusIcon.classList.add('fa-square-check');
	this.cardDeleteIcon.classList.add("fa-solid");
  this.cardDeleteIcon.classList.add("fa-trash");
	this.cardIconContainer.classList.add('iconContainer')

	// *** assemble readStatus container: icon & label
	this.cardReadStatusContainer.append(this.cardReadStatusIcon);
	this.cardReadStatusContainer.append(this.cardReadStatus);
	this.cardReadStatusContainer.classList.add("readStatusContainer");

	// *** Assemble icon container
	this.cardIconContainer.append(this.cardReadStatusContainer);
	this.cardIconContainer.append(this.cardDeleteIcon);

	// *** Assemble card
	let library = document.querySelector('.library');
	library.appendChild(this.card);
	this.card.append(this.cardTitle);
	this.card.append(this.cardAuthor);
	this.card.append(this.cardPages);
	this.card.append(this.cardIconContainer);

	// *** Add event listener
	this.cardDeleteIcon.addEventListener("click", () => {
		this.removeBook();
	});
}
	removeBook() {
		// this.cardDeleteIcon.classList.add('fade-out');
		this.card.style.display = 'none';
	}
}

// *** Create modal
let modal = document.querySelector('#myModal');
let addBtn = document.querySelector('.add');
let closeBtn = document.querySelector('.close');
let submitBtn = document.querySelector('.submit');

addBtn.onclick = function() {
	modal.style.display = "block";
}

closeBtn.onclick = function() {
	modal.style.display = "none";
}

submitBtn.onclick = function() {
	modal.style.display = "none";
	let title = document.querySelector('.titleInput').value;
	let author = document.querySelector('.authorInput').value;
	let pages = document.querySelector('.pagesInput').value;
	addBook(title, author, pages, true);
	document.querySelector('.titleInput').value = '';
	document.querySelector('.authorInput').value = '';
	document.querySelector('.pagesInput').value = '';
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function addBook(title, author, pages, readStatus) {
  myLibrary.push(new Book(title, author, pages, readStatus));
}

addBook('The Hobbit', 'J.R.R. Tolkien', 264, true);
addBook('To Kill a Mockingbird', 'Harper Lee', 174, true);
addBook('Fight Club', 'Chuck Palahniuk', 202, false);
addBook('The Wizard of Oz', 'Frank Goldman', 125, false);
addBook('The Cosmic Serpent', 'Jeremy Narby', 174, true);
console.log(myLibrary)