// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movies => movies.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(movies => movies.director === 'Quentin Tarantino');
  console.log('EXERCICE 2 ->', moviesFromDirector);
  return moviesFromDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = array.filter(movies => movies.director === 'Quentin Tarantino');

  if (moviesFromDirector === 0) {
    return 0;
  }

  const puntuacion = moviesFromDirector.reduce((sum, movie) => sum + movie.score, 0);
  const puntuacionTotal = puntuacion / moviesFromDirector.length;
  console.log('EXERCICE 3 ->', puntuacionTotal)
  return puntuacionTotal;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let peliculasOrden = [...array].sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });

  let max20 = 20;
  let peliculas = peliculasOrden.slice(0, max20);
  console.log('EXERCICE 4 ->', peliculasOrden);
  return peliculas.map(movies => movies.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let yearOrdenado = [...array].sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
  return yearOrdenado;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const arrayFiltro = movies.filter((movies) => movies.genre.includes(genre));
  const scoreGenero = arrayFiltro.filter((movie) => typeof movie.score === 'number');

  if (scoreGenero.length === 0) {
    return 0;
  }

  const resultado = scoreGenero.reduce((sum, genre) => sum + genre.score, 0);
  const puntuacionTotal = resultado / scoreGenero.length;
  console.log('EXERCICE 3 ->', puntuacionTotal)
  return Number(puntuacionTotal.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}