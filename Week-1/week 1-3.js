"use strict";
let movieTitle = "Bahubali: The Beginning";
let isBlockbuster = true;
let releaseYear = 2015;
function getMovieStatus(title, year) {
    return `${title} was a massive hit released in ${year}.`;
}
let leadActors = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);
