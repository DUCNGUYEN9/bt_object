class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  acreage() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  canvas() {
    const div = document.createElement("div");
    const a = document.createElement("p");
    const b = document.createElement("p");
    div.style.height = `${this.height}px`;
    div.style.width = `${this.width}px`;
    div.style.backgroundColor = `#207809`;
    a.textContent = `diện tích: ${this.acreage()}`;
    b.textContent = `chu vi: ${this.perimeter()}`;
    div.appendChild(a);
    div.appendChild(b);
    document.body.appendChild(div);
  }
}
const rectangle = new Rectangle(300, 200);
rectangle.canvas();
