import React from 'react';
import RandomMovie from './random-movie.jsx'

class MovieSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
    }
  }
  render(){
    return (
      <section className='main__movies'>
        <button className='main__button' onClick={this.fetchMovies}>Show movies</button>
        <RandomMovie movies={this.state.movies}/>
      </section>
    )
  }
  fetchMovies=()=>{
    let randomFetchedMovies = [];
    fetch(this.props.url).then(response=>{
      response.json().then(data=>{
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
