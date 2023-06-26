// Xây dựng đối tượng book gồm các thuộc tính và phương thức sau:
function Book(bookId, bookName, author, price, bookStatus) {
  // a. bookId: mã sách
  this.bookId = bookId;
  // b. bookName: tên sách
  this.bookName = bookName;
  // c. price: giá sách
  this.price = price;
  // d. author: Các tác giả sách
  this.author = author;
  // e. bookStatus: trạng thái sách
  this.bookStatus = bookStatus;
  // f. inputData: cho phép nhập thông tin sách
  this.inputData = function () {
    this.bookId = prompt("hãy nhập mã sách  ");
    this.bookName = prompt("hãy nhập tên sách  ");
    this.price = prompt("hãy nhập giá sách  ");
    this.author = prompt("hãy nhập tên tác giả sách  ");
    this.bookStatus = prompt("hãy nhập trạng thái sách  ");
  };
  // g. displayData: cho phép hiển thị các thông tin sách
  this.displayData = function () {
    console.log("Book ID: ", this.bookId);
    console.log("Book Name: ", this.bookName);
    console.log("Book Price: ", this.price);
    console.log("Book author: ", this.author);
    console.log("Book Status: ", this.bookStatus);
  };
}
const book = new Book();
book.inputData();
book.displayData();
