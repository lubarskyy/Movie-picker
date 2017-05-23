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
      url: '',
    }
  }
  render(){
    return (
      <section className='main'>

        <header className='main__header'>
          <div className='max-width'>
            <div className='header__content'>
              <img className='header__logo' src='images/movie-icon.png'/>
              <h1 className='header__title'>
                Movie Picker
              </h1>
            </div>
          </div>
        </header>

        <div className='max-width'>
          <Questionnaire
            year={this.state.year}
            genre={this.state.genre}
            runtime={this.state.runtime}
            language={this.state.language}
            handleBlur={this.setUrl}
            handleChangeYear={this.handleChangeYear}
            handleChangeGenre={this.handleChangeGenre}
            handleChangeRuntime={this.handleChangeRuntime}
            handleChangeLanguage={this.handleChangeLanguage}/>

          <MovieSection
            year={this.state.year}
            genre={this.state.genre}
            runtime={this.state.runtime}
            language={this.state.language}
            url={this.state.url}/>
        </div>

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
  setUrl=()=>{
    this.setState({url:
      'https://api.themoviedb.org/3/discover/movie?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&language=en-US'+ '&with_original_language=' + this.state.language + '&primary_release_year=' + this.state.year + '&with_runtime.lte=' + this.state.runtime + '&with_genres=' + this.state.genre
    })
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
