//Tạo đối tượng person rỗng
const person = {};
// a. Thêm thuộc tính firstName và lastName với giá trị là “Nguyễn Văn”
// và “Bình”
person.firstName = "Nguyễn Văn";
person.lastName = "Bình";
// b. Thay đổi giá trị lastName là “Hòa”
person.lastName = "Hòa";

// c. Xóa thuộc tính lastName khỏi đối tượng
delete person.lastName;
