let productName: string = "Laptop";
let productPrice: number = 59999;
let inStock: boolean = true;

console.log("Data type of productName is -> " + typeof productName);
console.log("Data type of productPrice is -> " + typeof productPrice);
console.log("Data type of inStock is -> " + typeof inStock);

function displayProductDetails(name: string, price: number, available: boolean): void {
    console.log(`Product: ${name}`);
    console.log(`Price: ₹${price}`);
    console.log(`Availability: ${available ? "In Stock" : "Out of Stock"}`);
}

displayProductDetails(productName, productPrice, inStock);