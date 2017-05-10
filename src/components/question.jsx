import React from 'react';

class Question extends React.Component {
  render(){
    return (
      <select onChange={this.props.handleChange} value={this.props.data}>
        <option> </option>
        {this.props.dataToShow.map(el=>{
          return <option>{el}</option>
        })}
      </select>
    )
  }
}

export default Question;
