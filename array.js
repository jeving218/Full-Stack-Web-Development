arr = [1, 3, 5]

arr.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

arr.forEach(function (element, index, arr) {
    console.log("function:", element, index, arr);
})


namearr = ['jeving', 'bittu', 'ankit', 'vishwas', 'maulik']
namearr.forEach((element) => {
    console.log(element.toUpperCase());
});

console.log(namearr);

const namewithn = namearr.filter((h)=>{
    return h.endsWith("g")
})

console.log(namewithn);


// CartBill

cart = [100,21,90]

const sumoOfCart = cart.reduce((pre,curr)=> pre + curr, 0)
console.log(sumoOfCart);
