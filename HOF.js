const powerTwo = (n) => {
    return n ** 2
}
console.log(powerTwo(2));

function powerCube(powerTwo, n) {
    return powerTwo(n) * n
}

console.log(powerCube(powerTwo, 2));

function sayHello() {
    return () => {
        console.log("Hello Everyone");
    }
}

console.log(sayHello());

const higheOrder = n => {
    const oneFun = m => {
        const towFun = p => {
            return n+m+p
        }
        return towFun
    }
    return oneFun
}

console.log(higheOrder(3)(5)(5));


myarr = [1,3,2,5,7]

const sumarray = arr =>{
    let total = 0
    arr.forEach(element => {
        total += element
    });
    return total
}

console.log(sumarray(myarr));