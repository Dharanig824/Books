// Books data (20 books with real covers + authors)
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", img: "https://covers.openlibrary.org/b/id/8228691-L.jpg" }, 
  { title: "1984", author: "George Orwell", img: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { title: "Pride and Prejudice", author: "Jane Austen", img: "https://covers.openlibrary.org/b/id/8091016-L.jpg" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "https://covers.openlibrary.org/b/id/7352160-L.jpg" },
  { title: "Moby-Dick", author: "Herman Melville", img: "https://covers.openlibrary.org/b/id/5551046-L.jpg" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", img: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", img: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", img: "https://covers.openlibrary.org/b/id/9255014-L.jpg" },
  { title: "Jane Eyre", author: "Charlotte Brontë", img: "https://covers.openlibrary.org/b/id/8228325-L.jpg" },
  { title: "War and Peace", author: "Leo Tolstoy", img: "https://covers.openlibrary.org/b/id/7222241-L.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", img: "https://covers.openlibrary.org/b/id/8370222-L.jpg" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", img: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
  { title: "The Odyssey", author: "Homer", img: "https://covers.openlibrary.org/b/id/8231859-L.jpg" },
  { title: "Harry Potter", author: "J.K. Rowling", img: "https://covers.openlibrary.org/b/id/7888781-L.jpg" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", img: "https://covers.openlibrary.org/b/id/8319256-L.jpg" },
  { title: "Brave New World", author: "Aldous Huxley", img: "https://covers.openlibrary.org/b/id/8779256-L.jpg" },
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", img: "https://covers.openlibrary.org/b/id/8228328-L.jpg" },
  { title: "Don Quixote", author: "Miguel de Cervantes", img: "https://covers.openlibrary.org/b/id/8231829-L.jpg" },
  { title: "The Divine Comedy", author: "Dante Alighieri", img: "https://covers.openlibrary.org/b/id/10643514-L.jpg" },
  { title: "Anna Karenina", author: "Leo Tolstoy", img: "https://covers.openlibrary.org/b/id/8235081-L.jpg" }
];

// Wishlist storage
let wishlist = [];

// Load bookstore dynamically
function loadBookstore() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <img src="${book.img}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <button onclick="addToWishlist(${index})">❤️ Add to Readlist</button>
    `;
    bookList.appendChild(bookCard);
  });
}

// Add to wishlist
function addToWishlist(index) {
  const book = books[index];
  if (!wishlist.some(item => item.title === book.title)) {
    wishlist.push(book);
    renderWishlist();
    alert(`${book.title} added to your Readlist!`);
  } else {
    alert(`${book.title} is already in your Readlist!`);
  }
}

// Render wishlist
function renderWishlist() {
  const wishlistDiv = document.querySelector("#wishlist .book-grid");
  wishlistDiv.innerHTML = "";
  wishlist.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <img src="${book.img}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
    `;
    wishlistDiv.appendChild(bookCard);
  });
}

// Contact form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert("Thank you for contacting us, " + name + "! We’ll get back to you soon.");
    form.reset();
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadBookstore();
});
