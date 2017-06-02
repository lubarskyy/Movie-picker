import React from 'react';
import Question from './question.jsx'

class Questionnaire extends React.Component{
  render(){
    const years = [];
    for(var i = 2017; i >= 1980; i--){
      years.push(i);
    }
    return (
      <section className='main__questions'>
        <div className='form'>

          <form className='form__select'>

            <div className='form__container'>
              <img className='icon' src='images/production.png'/>
              <label className='form__label'>Production year
                <Question
                  data={this.props.year}
                  dataToShow={years}
                  handleChange={this.props.handleChangeYear}
                  handleBlur={this.props.handleBlur}/>
              </label>
            </div>

            <div className='form__container'>
              <img className='icon' src='images/genre.png'/>
              <label className='form__label'>Genre
                <Question

                  dataToShow={['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']}
                  handleChange={this.props.handleChangeGenre}
                  handleBlur={this.props.handleBlur}/>
              </label>
            </div>

            <div className='form__container'>
              <img className='icon' src='images/runtime.png'/>
              <label className='form__label'>Runtime(minutes)
                <Question

                  dataToShow={['60 or less', '60 - 90', '90 - 120', '120 or more']}
                  handleChange={this.props.handleChangeRuntime}
                  handleBlur={this.props.handleBlur}/>
              </label>
            </div>

            <div className='form__container'>
              <img className='icon' src='images/lang.png'/>
              <label className='form__label'>Movie language
                <Question

                  dataToShow={['English', 'Polish']}
                  handleChange={this.props.handleChangeLanguage}
                  handleBlur={this.props.handleBlur}/>
              </label>
            </div>

          </form>
        </div>
      </section>
    )
  }
}

export default Questionnaire;
