'use strict'

let numberOfFilm

function start () {
  numberOfFilm = +prompt('Сколько фильмов вы уже смотрели?', '')

  while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
    numberOfFilm = +prompt('Сколько фильмов вы уже смотрели?', '')
  }
}

start()

const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function rememberMyFilm () {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Последний просмотренный фильм?', ''),
      b = prompt('Оценка?', '')

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b
      console.log('done')
    } else {
      console.log('error')
      i--
    }
  }
}

rememberMyFilm()

function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log('Посмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы класический зритель')
  } else if (personalMovieDB.count >= 30 && personalMovieDB.count <= 100) {
    console.log('Да вы киноман!')
  } else {
    console.log('error')
  }
}

detectPersonalLevel()

console.log(personalMovieDB)
