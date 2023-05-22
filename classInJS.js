// class firstClass {
//     // constructor without peramiator
//     constructor() {
//         console.log('---------------------------------------------first Class---------------------------------------------');
//     }
//     sayHello() {
//         console.log('say Hello from first Class');
//     }
// }

// const fc = new firstClass();
// console.log(fc);
// // // call the function
// const functionCall = fc.sayHello();

// class secondClass {
//     constructor(n, p) {
//         console.log('---------------------------------------------second Class---------------------------------------------');
//         this.name = n;
//         this.sal = p;
//     }
//     sayHello() {
//         console.log('say Hello from Second class ' ,this.name, this.sal );
//     }
// }

// const sc = new secondClass("Jeving", 9000000);
// console.log(sc);
// const secondFunctionCall = sc.sayHello();


// // // Code for Calculating Discount

// class CalculateDiscount{
//     constructor(item ,price, discount){
//         this.item = item;
//         this.price = price;
//         this.discount = discount;
//         console.log("---------------------------------------------Calculating Discount---------------------------------------------\n",this.item,this.price, this.discount);
//     }
//     CalculateDiscountedPrice(){
//         const newPrice = this.price*this.discount/100;
//         console.log(newPrice);
//     }
// } 

// const cd = new CalculateDiscount("iPhone",1101, 10);
// cd.CalculateDiscountedPrice();

// const cd2 = new CalculateDiscount("iPhone",2101, 10);
// cd2.CalculateDiscountedPrice();



// // Use of this function

// // 1st methohd
class firstThis {
    constructor(name, price) {
        console.log("-------------------------first This is calling -------------------------");
        this.name = name;
        this.price = price;
        console.log("Inside of Constructor ", this.name, this.price);
    }

    display() {
        console.log("Inside of Display function");
    }
}

const f = new firstThis("Apple", 100);

// // 2nd methohd in function
function secondThis(name) {
    this.name = name;
    console.log("-------------------------second This is calling -------------------------");
    console.log("Inside of Display function", this.name);
}

const s = new secondThis("Jeving");
console.log(s);

// // 3rd methohd in object

const object1 = {
    name: "\nJeving Trapsiya",
    greet: function () {
        console.log(this.name);
    }
}

object1.greet();

// // 4th methohd in object and in arrow function

const object2 = {
    name: "\nJeving Trapsiya",
    greet: () => {
        console.log(this.name);
    }
}

object2.greet();