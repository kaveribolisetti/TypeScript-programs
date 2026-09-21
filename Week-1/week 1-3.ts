let movieTitle: string = "Bahubali: The Beginning";
let isBlockbuster: boolean = true;
let releaseYear: number = 2015;

function getMovieStatus(title: string, year: number): string {
    return `${title} was a massive hit released in ${year}.`;
}

let leadActors: string[] = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];

const summary: string = getMovieStatus(movieTitle, releaseYear);

console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);

