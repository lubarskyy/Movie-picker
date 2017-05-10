import React from 'react';
import ReactDOM from 'react-dom';
import Questionnaire from './components/questionnaire.jsx';
import MovieSection from './components/movie-section.jsx';

import Test from './components/test.jsx';

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
      <section>
        <Questionnaire year={this.state.year} genre={this.state.genre} runtime={this.state.runtime} language={this.state.language}
          handleChangeYear={this.handleChangeYear} handleChangeGenre={this.handleChangeGenre}
          handleChangeRuntime={this.handleChangeRuntime} handleChangeLanguage={this.handleChangeLanguage}/>
        <MovieSection year={this.state.year} genre={this.state.genre} runtime={this.state.runtime} language={this.state.language}/>
        <Test/>
      </section>
    )
  }
  handleChangeYear=(e)=>{
    this.setState({year: e.target.value})
  }
  handleChangeGenre=(e)=>{
    this.setState({genre: e.target.value})
  }
  handleChangeRuntime=(e)=>{
    this.setState({runtime: e.target.value})
  }
  handleChangeLanguage=(e)=>{
    this.setState({language: e.target.value})
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'))
