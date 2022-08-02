let username = prompt("enter your name");

let gender = prompt("enter your gender (male(M) or female(F)");

let age = prompt("enter your age");
if (age <= 0) {
  alert("age is less than or equal to zero");
}

let confirmation = confirm("confirm if you want to skip the welcoming message");

if (confirmation == 0) {
  if (gender === "female") {
    alert("Welcome Ms." + username);
  } else if (gender === "male") {
    alert("Welcome Mr." + username);
  } else {
    alert("Welcome " + username);
  }
}

let question01 = confirm("do you like football?");

let question02 = confirm("Do you like studying??");

let question03 = confirm("Do you practice sport ??");

let arr = [question01, question02, question03];

for (let x = 0; x < arr.length; x++) {
  if (arr[x].length == 0) {
    arr[x] = "invalid";
  }
  console.log(arr[x]);
}
