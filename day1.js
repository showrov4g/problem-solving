function getArea(length, width){
    let area = length * width
    return area;
}

// another function 

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// উদাহরণ ব্যবহার:
console.log(factorial(4)); // Output: 120