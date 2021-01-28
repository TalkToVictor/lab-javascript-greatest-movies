// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = movies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    const filteredMovies = movies.filter(
        movie =>
            movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    return filteredMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sortedTitles = movies.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    let sortedTwenty = sortedTitles.slice(0, 20);
    let finalTwenty = [];

    sortedTwenty.forEach(function (titles) {
        finalTwenty.push(titles.title);
    });
    return finalTwenty;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const ratesTotal = movies.reduce((accumulator, currentValue) => {
        if (!currentValue.rate) {
            return accumulator + 0;
        }
        return accumulator + parseInt(currentValue.rate, 10);
    }, 0);

    const ratesAv = ratesTotal / movies.length;

    return Math.round(ratesAv * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => {
        if (movie.genre.includes("Drama")) {
            return true;
        }
    });
    if (!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    movieMins = movies.map(function (movie) {
        let hrIndex = movie.duration.search("h");
        let hrsStr = "";
        let minsStr = "";
        if (hrIndex >= 0) {
            hrsStr = movie.duration.slice(hrIndex - 1, hrIndex);
        }
        let minIndex = movie.duration.search("m");
        if (minIndex >= 0) {
            minsStr = movie.duration.slice(minIndex - 2, minIndex);
        }
        let hr = Number(hrsStr);
        let min = Number(minsStr);
        let movieDurMins = hr * 60 + min;
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movieDurMins,
            genre: movie.genre,
            rate: movie.rate
        };
    });
    return movieMins;
}
// time format

function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        const duration = movie.duration.split(" ");
        let mins = 0;
        for (let time of duration) {
            if (time.includes("h")) {
                mins += parseInt(time) * 60;
            } else {
                mins += parseInt(time);
            }
        }
        return { ...movie, duration: mins };
    });
}