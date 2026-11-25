// Type aliases allow us to reuse custom types

type TestCase = {
    id: number;
    title: string;
    status: string;
};

let test: TestCase = {
    id: 1,
    title: "Verify successful login",
    status: "Passed"
};

console.log("Test ID:", test.id);
console.log("Test:", test.title);
console.log("Status:", test.status);

