function addOrEvent(numbers) {
  if (numbers % 2 === 0) {
    return console.log("Even");
  } else {
    return console.log("Odd");
  }
}

function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// average number calculations

function getGrade(s1, s2, s3) {
  // Code here
  let score = (s1, s2, s3) / 2;
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F'; // 0 থেকে 59 হলে F
}
getGrade(90, 95, 90);
