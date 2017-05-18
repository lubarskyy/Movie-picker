import React from 'react';
import ReactDOM from 'react-dom';
import Questionnaire from './components/questionnaire.jsx';
import MovieSection from './components/movie-section.jsx';
require('../sass/style.scss')

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      year: '',
      genre: '',
      runtime: '',
      language: '',
    }
  }
  render(){
    return (
      <section className='main'>
        <Questionnaire year={this.state.year} genre={this.state.genre} runtime={this.state.runtime} language={this.state.language}
          handleChangeYear={this.handleChangeYear} handleChangeGenre={this.handleChangeGenre}
          handleChangeRuntime={this.handleChangeRuntime} handleChangeLanguage={this.handleChangeLanguage}/>
        <MovieSection year={this.state.year} genre={this.state.genre} runtime={this.state.runtime} language={this.state.language}/>
      </section>
    )
  }
  handleChangeYear=(e)=>{
    this.setState({year: e.target.value})
  }
  handleChangeGenre=(e)=>{
    switch(e.target.value){
      case 'Action':
        this.setState({genre: 28});
        break;
      case 'Adventure':
        this.setState({genre: 12});
        break;
      case 'Animation':
        this.setState({genre: 16});
        break;
      case 'Comedy':
        this.setState({genre: 35});
        break;
      case 'Crime':
        this.setState({genre: 80});
        break;
      case 'Documentary':
        this.setState({genre: 99});
        break;
      case 'Drama':
        this.setState({genre: 18});
        break;
      case 'Family':
        this.setState({genre: 10751});
        break;
      case 'Fantasy':
        this.setState({genre: 14});
        break;
      case 'History':
        this.setState({genre: 36});
        break;
      case 'Horror':
        this.setState({genre: 27});
        break;
      case 'Music':
        this.setState({genre: 10402});
        break;
      case 'Mystery':
        this.setState({genre: 9648});
        break;
      case 'Romance':
        this.setState({genre: 10749});
        break;
      case 'Science Fiction':
        this.setState({genre: 878});
        break;
      case 'TV Movie':
        this.setState({genre: 10770});
        break;
      case 'Thriller':
        this.setState({genre: 53});
        break;
      case 'War':
        this.setState({genre: 10752});
        break;
      case 'Western':
        this.setState({genre: 37});
        break;
    }
  }
  handleChangeRuntime=(e)=>{
    this.setState({runtime: e.target.value})
  }
  handleChangeLanguage=(e)=>{
    this.setState({language: e.target.value})
  }
}
document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App/>, document.querySelector('#app'))

  const panel = document.querySelector('.main__leftside');
  const form = document.querySelector('.form');
  const movies = document.querySelector('.main__movies');

  // panel.addEventListener('click', function(){
  //   panel.style.width = '5%';
  //   form.style.display = 'none';
  //   movies.style.width = '100vw';
  // })
});
