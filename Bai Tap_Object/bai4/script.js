// Tạo đối tượng menu gồm các thuộc tính width, height và title. Xây dựng
// hàm nhân 2 giá trị các thuộc tính có giá trị là number
const menu = {
  width: 20,
  height: 33,
  title: "Rikkei Academy",
};
function multi(object) {
  let a = 1;
  for (const key in object) {
    if (!isNaN(object[key])) {
      a *= object[key];
    }
  }
  return a;
}
console.log(
  "nhân 2 giá trị các thuộc tính có giá trị là number: ",
  multi(menu)
);
