// class Stack {
//     #arr;
//     constructor() {
//         this.#arr = [];
//     }
//     push(x) {
//         this.#arr.push(x);
//     }
//     pop() {
//         this.#arr.pop();
//     }
//     top() {
//         if (this.#arr.length == 0) return undefined;
//         return this.#arr[this.#arr.length - 1];
//     }
// }

// const st = new Stack();
// st.push(10);
// st.push(20);
// st.push(30);

// console.log(st.top());
// console.log(st.pop());
// console.log(st.top());

// st.push(110);
// st.push(120);
// st.push(130);
// console.log(st.top());



// // complex numbers

class ComplexNumber {
    #real;
    #img;
    constructor(r, i) {
        this.#real = r;
        this.#img = i;
    }

    get real() {
        return this.#real;
    }
    get img() {
        return this.#img;
    }
    addComplexNumber(c) {
        this.#real += c.real;
        this.#img += c.img;
    }

    display(){
        console.log(this.#real," + i" ,this.#img);
    }
}

const c1 = new ComplexNumber(1, 2);
const c2 = new ComplexNumber(5, 5);
c1.addComplexNumber(c2);
c1.display();
// c2.addComplexNumber(c1);
// c2.display();