import React from 'react';
import RandomMovie from './random-movie.jsx'

class MovieSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      movies: [],
    }
  }
  render(){
    return (
      <section className='main__movies'>
        <RandomMovie movies={this.state.movies}/>
        <button onClick={this.setMovies}>SET URL</button>
        <button onClick={this.fetchMovies}>SHOW MOVIES</button>
      </section>
    )
  }
  setMovies=()=>{
    this.setState({url:
      'https://api.themoviedb.org/3/discover/movie?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&language=en-US'+ '&with_original_language=' + this.props.language + '&year=' + this.props.year + '&with_runtime.lte=' + this.props.runtime + '&with_genres=' + this.props.genre
    })
  }
  fetchMovies=()=>{
    let randomFetchedMovies = [];
    fetch(this.state.url).then(response=>{
      response.json().then(data=>{
        console.log(data.results)
        data.results.forEach(el=>{
          randomFetchedMovies.push(el);
        })
        this.setState({movies: this.shuffleArray(randomFetchedMovies).splice(0,3)})
      })
    })
  }
  shuffleArray=(array)=> {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}

export default MovieSection;
