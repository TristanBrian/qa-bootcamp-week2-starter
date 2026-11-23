// Optional chaining safely accesses nested properties

type Customer = {
    name: string;
    contact?: {
        email?: string;
        phone?: string;
    };
};

let customer: Customer = {
    name: "Brian Kioko",
    contact: {
        email: "Bkioko@example.com"
    }
};

console.log("Customer:", customer.name);
console.log("Email:", customer.contact?.email);
console.log("Phone:", customer.contact?.phone);