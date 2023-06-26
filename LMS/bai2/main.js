function Temperature(Celsius) {
  this.Celsius = Celsius;
  this.convertFromCtoF = function () {
    return (this.Celsius * 9) / 5 + 32;
  };
  this.convertFromCtoKenvin = function () {
    return this.Celsius + 273.15;
  };
}
const temperature = new Temperature(25);
let div1 = document.createElement("div");
let div2 = document.createElement("div");

div1.innerHTML = temperature.convertFromCtoF() + " °F";
div2.innerHTML = temperature.convertFromCtoKenvin() + " °K";
document.body.appendChild(div1);
document.body.appendChild(div2);
