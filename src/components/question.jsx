import React from 'react';

class Question extends React.Component {
  render(){
    return (
      <select className='form__options' onChange={this.props.handleChange} value={this.props.data}>
        <option> </option>
        {this.props.dataToShow.map(el=>{
          return <option>{el}</option>
        })}
      </select>
    )
  }
}

export default Question;
