var A;
A = 7; // Corrected to use A instead of a
console.log(A); // Output: 7

let arr = [1, 2, 3]; // Corrected array declaration

for (let index = 0; index < arr.length; index++) { // Fixed loop condition
    console.log(arr[index]); // Prints each array element
}
console.log("HI", "A\t" + 1); 
let ritikRuns = { name: "Ritik", total: 0 }; // Corrected object syntax
// console.log(ritikRuns);
let otherRuns = {...ritikRuns}; // Assigning reference to another variable deconstruction not a reference 

otherRuns.total = 90; // Updating the "total" property

console.log(ritikRuns); // Output: { name: "Ritik", total: 90 }
console.log(otherRuns); // Output: { name: "Ritik", total: 90 }
var ouarray=["john",1,23];
for (let index = 0; index < ouarray.length; index++) {
    console.log("\n");
    console.log(ouarray[index]);
    
}