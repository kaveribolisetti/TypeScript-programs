"use strict";
let productName = "Laptop";
let productPrice = 59999;
let inStock = true;
console.log("Data type of productName is -> " + typeof productName);
console.log("Data type of productPrice is -> " + typeof productPrice);
console.log("Data type of inStock is -> " + typeof inStock);
function displayProductDetails(name, price, available) {
    console.log(`Product: ${name}`);
    console.log(`Price: ₹${price}`);
    console.log(`Availability: ${available ? "In Stock" : "Out of Stock"}`);
}
displayProductDetails(productName, productPrice, inStock);
