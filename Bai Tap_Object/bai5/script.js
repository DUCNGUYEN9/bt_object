// Tạo đối tượng máy tính gồm 3 phương thức

const computer = {
  // a. Read(): nhận hai giá trị và lưu chúng dưới dạng thuộc tính đối
  // tượng
  read(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  },
  // b. Sum(): trả về tổng giá trị đã lưu
  sum() {
    return this.value1 + this.value2;
  },
  // c. Mul(): trả về tích các giá trị đã lưu
  mul() {
    return this.value1 * this.value2;
  },
};
const result = Object.create(computer);
result.read(3, 4);
console.log(result);
console.log(result.sum());
console.log(result.mul());
