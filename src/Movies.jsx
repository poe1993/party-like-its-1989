import React, { Component } from 'react'

export class Movies extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=c52ca2742a0605eb94d877b1bfae3097'
    )
    const movieJSON = await response.json()
    console.log(movieJSON.results)
    this.setState({ movies: movieJSON.results })
  }
  render() {
    return (
      <div>
        <ul className="movielist">
          {this.state.movies.map(movie => (
            <ul key={movie}>
              <h2 className="movietitle">{movie.original_title}</h2>
              <img
                className="imagelist"
                src={'https://image.tmdb.org/t/p/w185' + `${movie.poster_path}`}
                alt="movie poster"
                height="300"
                width="300"
              ></img>
              <h3 className="releasedate">{movie.release_date}</h3>

              <ul>
                <li className="voteraverage">Score:{movie.vote_average}/10</li>
                <li className="votecount">Votes:{movie.vote_count}</li>
              </ul>
              <p className="overview">{movie.overview}</p>
            </ul>
          ))}
        </ul>
      </div>
    )
  }
}
