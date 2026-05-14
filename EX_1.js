
// Step 1 
let students = ["Dania", "Omar", "Lina", "Rami"];

// Step 2 
students.push("Sara");

// Step 3 
students.unshift("Adam");

// Step 4 
students[3] = "Lamar";

// Step 5 
let removedLast = students.pop();

// Step 6 
let removedFirst = students.shift();

// Step 7 
let hasRami = students.includes("Rami");

// Step 8 
let omarIndex = students.indexOf("Omar");

// Step 9 
let groupA = students.slice(0, 2);

// Step 10 
let groupB = ["Nour", "Tala"];
let allGroups = groupA.concat(groupB);

// Step 11 
let groupString = allGroups.join(" | ");

// Step 12 
students.sort();

// Step 13 
students.reverse();

// Step 14 
let seats = [1, 2, 3, 4, 5];
seats.splice(1, 3, "Reserved", "Reserved", "Reserved");
let reservedSeats = seats;

// Step 15
let studentsString = students.join(", ");

// Step 16 
console.log("students:", students);
console.log("removedLast:", removedLast);
console.log("removedFirst:", removedFirst);
console.log("hasRami:", hasRami);
console.log("omarIndex:", omarIndex);
console.log("groupA:", groupA);
console.log("allGroups:", allGroups);
console.log("groupString:", groupString);
console.log("reservedSeats:", reservedSeats);
console.log("studentsString:", studentsString);