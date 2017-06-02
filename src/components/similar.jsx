import React from 'react';
import RandomMovie from './random-movie.jsx';

class Similar extends React.Component {
  render(){
    return (
      <div className='movie__similar'>
        {this.props.similar.map(el=>{
          return <img className='movie__similar-poster hidden' key={el.id} src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}></img>
        })}
      </div>
    )
  }
}

export default Similar;
