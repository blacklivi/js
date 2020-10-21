const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '')
console.log(numberOfFilms)

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

const a = prompt('Сколько фильмов просмотрел?', ''),
      b = prompt('Сколько просмотрел', ''),
      c = prompt('Сколько фильмов просмотрел?', ''),
      d = prompt('Сколько просмотрел', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
