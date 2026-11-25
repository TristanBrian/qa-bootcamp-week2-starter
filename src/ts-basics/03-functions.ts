// Functions with typed parameters and return values

function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(greet("Brian Kioko"));
console.log("Sum:", addNumbers(10, 20));

