// const PI = Math.PI


// const r=5;

// const area = (Math.PI * Math.pow(r,2)).toFixed(3)

// const perimeter = (2 * Math.PI*2).toFixed(3)

// console.log(area)


function getGrade(score){
    let grade;
    if(score > 0 && score <= 5){
        grade = "F";
    }
    if(score > 5 && score <= 10){
       grade = "E";
    }
   if(score > 10 && score <= 15){
        grade = "D";
    }
    if(score > 15 && score <= 20){
         grade = "C";
    }
    if(score > 20 && score <= 25){
        grade = "B";
    }
    if(score > 25 && score <= 30){
        grade = "A";
    }
    return grade
}

console.log(getGrade(5))