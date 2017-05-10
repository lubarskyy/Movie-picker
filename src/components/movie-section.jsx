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
      <section>
        {(this.state.url == '') ? null : <RandomMovie movies={this.state.movies}/>}
        <button onClick={this.setMovies}>SET URL</button>
        <button onClick={this.fetchMovies}>FETCHUJ SOWE</button>
      </section>
    )
  }
  setMovies=()=>{
    this.setState({url:
      'https://api.themoviedb.org/3/discover/movie?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'+ '&language=' + this.props.language + '&year=' + this.props.year + '&with_runtime.lte=' + this.props.runtime + '&with_genres=28'
    })
  }
  fetchMovies=()=>{
    fetch(this.state.url).then(response=>{
      response.json().then(data=>{
        console.log(data.results);
        this.setState({movies: data.results})
      })
    })
  }
}

export default MovieSection;
