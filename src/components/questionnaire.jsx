import React from 'react';
import Question from './question.jsx'

class Questionnaire extends React.Component{
  render(){
    let genre;
    {this.props.genre == 28 ? genre = 'Action' : null}
    return (
      <form>
        <Question data={this.props.year} dataToShow={['2014', '2015', '2016', '2017']} handleChange={this.props.handleChangeYear}/>
        <Question
          data={genre}
          dataToShow={['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']} 
          handleChange={this.props.handleChangeGenre}
          />
        <Question data={this.props.runtime} dataToShow={['60', '90', '120']} handleChange={this.props.handleChangeRuntime}/>
        <Question data={this.props.language} dataToShow={['en', 'pl']} handleChange={this.props.handleChangeLanguage}/>
      </form>)
  }
}

export default Questionnaire;
