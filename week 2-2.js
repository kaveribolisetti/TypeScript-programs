"use strict";
function calculateTotalTraditional(price, taxRate) {
    return price + (price * taxRate);
}
const calculateTotalArrow = (price, taxRate) => {
    return price + (price * taxRate);
};
const getWelcomeMessage = (theatre) => `welcome to ${theatre} Cinemas !`;
const ticketPrice = 250;
const gsRate = 0.18;
console.log(getWelcomeMessage("PVR"));
const total1 = calculateTotalTraditional(ticketPrice, gsRate);
console.log(`Total(Traditional):${total1}`);
const total2 = calculateTotalArrow(ticketPrice, gsRate);
console.log(`Total(Arrow):${total2}`);
