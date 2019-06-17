var htmlList = document.querySelector('.smartphones')

function Phone(brand, price, color, memory) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory;
}



Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", memory storage " + this.memory + ", and the price is" + this.price + ".");
}

Phone.prototype.htmlPush = function () {
    htmlList.insertAdjacentHTML('afterbegin', "<br>" + "The phone brand is " + this.brand + ", color is " + this.color + ", memory storage " + this.memory + ", and the price is " + this.price + "pln.");
}

var samsungGalaxyS6 = new Phone("Samsung", 1000, "black", "64 GB");
var iPhone6S = new Phone("Apple", 1500, "silver", "128 GB");
var onePlusOne = new Phone("OnePlus", 2000, "blue", "256 GB");

samsungGalaxyS6.htmlPush();
iPhone6S.printInfo();
onePlusOne.printInfo();