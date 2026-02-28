// Function with parameter types and return type
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);
console.log("Addition:", result);

// Function returning string
function greet(name: string): string {
    return "Hello " + name;
}

console.log(greet("Nagaraju"));

// Function with no return (void)
function displayMessage(message: string): void {
    console.log(message);
}

displayMessage("Welcome to TypeScript");