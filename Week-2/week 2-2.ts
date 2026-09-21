function calculateTotalTraditional(price: number, taxRate:number):number{
    return price + (price*taxRate);
}

const calculateTotalArrow = (price : number, taxRate : number): number =>{
    return price + (price * taxRate);
}

const getWelcomeMessage = (theatre : string):string => `welcome to ${theatre} Cinemas !`
const ticketPrice : number = 250;
const gsRate : number = 0.18;
console.log(getWelcomeMessage("PVR"));

const total1 = calculateTotalTraditional(ticketPrice,gsRate);
console.log(`Total(Traditional):${total1}`);

const total2 = calculateTotalArrow(ticketPrice,gsRate);
console.log(`Total(Arrow):${total2}`);