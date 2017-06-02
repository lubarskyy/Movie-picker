import React from 'react';
import ReactDOM from 'react-dom';
import Questionnaire from './components/questionnaire.jsx';
import MovieSection from './components/movie-section.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
require('../sass/style.scss');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      year: '',
      genre: '',
      runtime: '',
      dir: '',
      language: '',
      page: 1,
      url: '',
    }
  }
  render(){
    return (
      <div className='main'>

        <Header/>

        <main className='max-width'>
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
        </main>

        <Footer/>

      </div>
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
    switch(e.target.value){
      case '60 or less':
        this.setState({runtime: 60});
        this.setState({dir: 'lte='});
        break;
      case '60 - 90':
        this.setState({runtime: 90});
        this.setState({dir: 'lte='});
        break;
      case '120 or more':
        this.setState({runtime: 120});
        this.setState({dir: 'gte='});
        break;
    }
  }
  handleChangeLanguage=(e)=>{
    switch(e.target.value){
      case 'English':
        this.setState({language: 'en'});
        break;
      case 'Polish':
        this.setState({language: 'pl'});
        break;
    }
  }
  setUrl=()=>{
    this.setState({url:
      'https://api.themoviedb.org/3/discover/movie?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&sort_by=popularity.desc&include_adult=true&include_video=false&language=en-US' + '&page=' + this.state.page + '&with_original_language=' + this.state.language + '&primary_release_year=' + this.state.year + '&primary_release_date.lte=2017-06-01' + '&with_runtime.' + this.state.dir + this.state.runtime + '&with_genres=' + this.state.genre
    })
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App/>, document.querySelector('#app'))
});
