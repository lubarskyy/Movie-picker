import React from 'react';

class Trailer extends React.Component {
  render(){
    if(this.props.youtube !== null) {
      return (
        <div className='movie__trailer'>
          <iframe className='movie__trailer-video hidden' src={`https://www.youtube.com/embed/${this.props.youtube}`}></iframe>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Trailer;
