// Xây dựng đối tượng chứa tiền lương của các nhân viên trong phòng. Viết
// hàm tính tổng lương của các nhân viên trong phòng

const salary = {
  nv1: 2000,
  nv2: 3000,
  nv3: 500,
  nv4: 1500,
};
function sumSalary(object) {
  let sum = 0;
  for (const key in object) {
    sum += object[key];
  }
  return sum;
}
console.log("lương của tổng nhân viên : ", sumSalary(salary), "$");
