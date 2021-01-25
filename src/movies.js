// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directors = movies
        .filter((movie) => movie.director)
        .map((movie) => movie.director);
    const uniqueDirectors = directors.filter((elem, i, arr) => arr.indexOf(elem) === i);

    return uniqueDirectors;
}
//Same Solution but introducing Set(), Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

/* function getAllDirectors(movies) {
  const directors = movies
    .filter((movie) => movie.director)
    .map((movie) => movie.director);
  return [...new Set(directors)];
} */
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function howManyMovies(someMovies) {
    return someMovies.filter(
        (eachMovie) =>
            eachMovie.director === "Steven Spielberg" &&
            eachMovie.genre.includes("Drama")
    ).length;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(lotsOfMovies) {
    //  return !lotsOfMovies.length? 0 : Number((lotsOfMovies.reduce((a,b) => b.rate? a + b.rate : a, 0)/lotsOfMovies.length).toFixed(2));
    // this is the one line version

    if (!lotsOfMovies.length) {
        return 0;
    }

    let total = lotsOfMovies.reduce((a, b) => {
        if (b.rate) {
            return a + b.rate;
        } else {
            return a;
        }
    }, 0);

    // you can use Number(), parseInt() or simply plus +
    return Number((total / lotsOfMovies.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(someMovies) {
    let drMovies = someMovies.filter((eachMovie) =>
        eachMovie.genre.includes("Drama")
    );
    return ratesAverage(drMovies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
