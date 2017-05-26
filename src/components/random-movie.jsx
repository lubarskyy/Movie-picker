import React from 'react';
import {getMovie} from './fetch.jsx';
import {getTrailer} from './fetch.jsx';
import {getSimilarMovies} from './fetch.jsx';
import {getCast} from './fetch.jsx';

class RandomMovie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movie: null,
      youtube: null,
      similar: null,
      cast: null,
    }
  }
  render(){
    const movie = this.state.movie;

    if(this.state.movie !== null && this.state.youtube !== null && this.state.similar !== null
      && this.state.cast !== null){
      return (
        <div>
          <div className='movie'
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1000/${movie.backdrop_path})`}}>

            <div className='movie__content'>
              <div>
                <img className='movie__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
              </div>
              <div className='movie__info'>
                <p className='movie__title'>{movie.title}</p>
                <p className='movie__release'>Release date: {movie.release_date}</p>
                <p className='movie__vote'>Rating: {movie.vote_average}/10, based on {movie.vote_count} votes</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Status: {movie.status}</p>
                <p>Genres: {movie.genres.map(el=>{
                    return <span key={el.name}>{el.name}, </span>
                  })}</p>
                <p className='movie__overview'>Overview:</p>
                <p className='movie__description'>{movie.overview}</p>
              </div>
            </div>

          </div>

          <div className='movie__buttons'>
            <button className='main__button' onClick={this.showTrailer}>Trailer</button>
            <button className='main__button main__button--width' onClick={this.showSimilar}>Similar movies</button>
            <button className='main__button' onClick={this.showCast}>Cast</button>
          </div>

          <div className='movie__trailer'>
            <iframe className='movie__trailer-video hidden' src={`https://www.youtube.com/embed/${this.state.youtube}`}></iframe>
          </div>

          <div className='movie__similar'>
            {this.state.similar.map(el=>{
              return <img className='movie__similar-poster hidden' key={el.id} src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}></img>
            })}
          </div>

          <div className='movie__cast'>
            {this.state.cast.map(el=>{
              return (
                <div key={el.id}>
                  <img className='movie__similar-poster hidden' key={el.cast_id} src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}></img>
                  <p className='hidden' key={el.name}>{el.name} as {el.character}</p>
              </div>)
            })}
          </div>

        </div>
      )
    } else {
      return null
    }
  }
  componentDidMount() {
    const movieId = this.props.movieId;

    getMovie(movieId).then(data => {
      this.setState({movie: data});
    });

    getTrailer(movieId).then(data => {
      this.setState({youtube: data.results[0].key});
    });

    getSimilarMovies(movieId).then(data => {
      this.setState({similar: data.results.splice(0,3)});
    });

    getCast(movieId).then(data => {
      this.setState({cast: data.cast.splice(0,6)});
    });

  }
  componentWillReceiveProps(nextProps) {

    getMovie(nextProps.movieId).then(data => {
      this.setState({movie: data});
    });

    getTrailer(nextProps.movieId).then(data => {
      this.setState({youtube: data.results[0].key});
    });

    getSimilarMovies(nextProps.movieId).then(data => {
      this.setState({similar: data.results.splice(0,3)});
    });

    getCast(movieId).then(data => {
      this.setState({cast: data.cast.splice(0,6)});
    });

  }
  showTrailer=(e)=>{
    e.target.parentNode.nextSibling.firstChild.classList.toggle('hidden');
  }
  showSimilar=(e)=>{
    const posters = Array.from(e.target.parentNode.nextSibling.nextSibling.childNodes);
    posters.forEach(el=>{
      el.classList.toggle('hidden');
    })
  }
  showCast=(e)=>{
    const figures = Array.from(e.target.parentNode.nextSibling.nextSibling.nextSibling.childNodes);
    figures.forEach(el=>{
      const content = Array.from(el.childNodes);
      content.forEach(el=>{
        el.classList.toggle('hidden');
      })
    })
  }
}

export default RandomMovie;
