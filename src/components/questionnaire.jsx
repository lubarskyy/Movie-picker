import React from 'react';
import Question from './question.jsx'

class Questionnaire extends React.Component{
  render(){
    return (
      <section className='main__questions'>
        <div className='form'>

          <div className='form__icons'>
            <img className='icon' src='images/production.png'/>
            <img className='icon' src='images/genre.png'/>
            <img className='icon' src='images/runtime.png'/>
            <img className='icon' src='images/lang.png'/>
          </div>

          <form className='form__select'>

            <label className='form__label'>Production year
              <Question
                data={this.props.year}
                dataToShow={['2014', '2015', '2016', '2017']}
                handleChange={this.props.handleChangeYear}
                handleBlur={this.props.handleBlur}/>
            </label>

            <label className='form__label'>Genre
              <Question

                dataToShow={['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']}
                handleChange={this.props.handleChangeGenre}
                handleBlur={this.props.handleBlur}/>
            </label>

            <label className='form__label'>Runtime(minutes)
              <Question
                data={this.props.runtime}
                dataToShow={['60', '90', '120']}
                handleChange={this.props.handleChangeRuntime}
                handleBlur={this.props.handleBlur}/>
            </label>

            <label className='form__label'>Movie language
              <Question
                
                dataToShow={['English', 'Polish']}
                handleChange={this.props.handleChangeLanguage}
                handleBlur={this.props.handleBlur}/>
            </label>

          </form>
        </div>
      </section>
    )
  }
}

export default Questionnaire;
