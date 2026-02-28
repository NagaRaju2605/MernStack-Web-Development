// Simple Types
let age: number = 21;
let name: string = "Nagaraju";
let isStudent: boolean = true;

console.log("Age:", age);
console.log("Name:", name);
console.log("Student:", isStudent);

// Special Types
let data: any = 100;
data = "Hello";  // any can change type

let value: unknown = "TypeScript";

function showMessage(): void {
    console.log("This function returns nothing");
}

let emptyValue: null = null;
let notAssigned: undefined = undefined;

showMessage();
console.log("Any Type:", data);
console.log("Unknown Type:", value);