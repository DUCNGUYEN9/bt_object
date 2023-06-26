// Viết hàm checkEmpty kiểm tra đối tượng có thuộc tính không? Có thì trả
// về true, ngược lại trả về false
const obj = {};

function checkEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
}
console.log(checkEmpty(obj));
