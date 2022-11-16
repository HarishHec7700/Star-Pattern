// Diamond Pattern 

let num = parseInt(prompt("Enter the term"));
let str = "";
// Upside pyramid
for (let i = 1; i <= num; i++) {
  // printing spaces
  for (let j = num; j > i; j--) {
    str += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    str += "*";
  }
  str += "\n";
}
// downside pyramid
for (let i = 1; i <= num - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    str += " ";
  }
  // printing star
  for (let k = (num - i) * 2 - 1; k > 0; k--) {
    str += "*";
  }
  str += "\n";
}
console.log(str); 