function Book(bookId, bookName, author, price, bookStatus) {
  this.bookId = bookId;
  this.bookName = bookName;
  this.author = author;
  this.price = price;
  this.bookStatus = bookStatus;
  this.books = [];

  // a. Thêm dữ liệu sách và lưu vào mảng
  this.addBook = function () {
    const bookId = prompt("Enter book id: ");
    const bookName = prompt("Enter book name: ");
    const author = prompt("Enter author book: ");
    const price = prompt("Enter price book: ");
    const bookStatus = prompt("Enter book status: ");

    const newBook = new Book(bookId, bookName, author, price, bookStatus);
    this.books.push(newBook);
  };

  // b. Hiển thị thông tin các sách
  this.displayBooks = function () {
    this.books.forEach(function (book) {
      console.log("Book Id:", book.bookId);
      console.log("Book Name:", book.bookName);
      console.log("Author:", book.author);
      console.log("Price:", book.price);
      console.log("Book Status:", book.bookStatus);
    });
  };

  // c. Cho phép cập nhật thông tin sách
  this.updateBook = function (bookId) {
    const bookToUpdate = this.books.find(function (book) {
      return book.bookId === bookId;
    });

    if (bookToUpdate) {
      bookToUpdate.bookName = prompt("Enter new book name: ");
      bookToUpdate.author = prompt("Enter new author book: ");
      bookToUpdate.price = prompt("Enter new price book: ");
      bookToUpdate.bookStatus = prompt("Enter new book status: ");
      console.log("Book updated successfully!");
    } else {
      console.log("Book not found!");
    }
  };

  // d. Cho phép xóa sách
  this.deleteBook = function (bookId) {
    const bookIndex = this.books.findIndex(function (book) {
      return book.bookId === bookId;
    });

    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      console.log("Book deleted successfully!");
    } else {
      console.log("Book not found!");
    }
  };

  // e. Cho phép sắp xếp sách theo giá sách tăng dần
  this.sortBooksByPrice = function () {
    this.books.sort(function (book1, book2) {
      return book1.price - book2.price;
    });

    console.log("Books sorted by price:");
    this.displayBooks();
  };

  // f. Cho phép tìm kiếm sách theo tên sách
  this.searchBooksByName = function (bookName) {
    const foundBooks = this.books.filter(function (book) {
      return book.bookName.toLowerCase().includes(bookName.toLowerCase());
    });

    if (foundBooks.length > 0) {
      console.log("Matching books:");
      foundBooks.forEach(function (book) {
        console.log("Book Id:", book.bookId);
        console.log("Book Name:", book.bookName);
        console.log("Author:", book.author);
        console.log("Price:", book.price);
        console.log("Book Status:", book.bookStatus);
      });
    } else {
      console.log("No matching books found!");
    }
  };
}
const library = new Book();
library.addBook();
library.addBook();
console.log("Book 1: ", library.books[0]);
console.log("Book 2: ", library.books[1]);
library.displayBooks();
const bookIdUpdate = prompt("Enter book id to update:");
library.updateBook(bookIdUpdate);
library.displayBooks();
const bookIdDelete = prompt("Enter book id to delete:");
library.deleteBook(bookIdDelete);
library.displayBooks();
library.sortBooksByPrice();
const bookNameSearch = prompt("Enter book name to search :");
library.searchBooksByName(bookNameSearch);
