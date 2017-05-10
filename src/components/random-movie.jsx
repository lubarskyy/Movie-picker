import React from 'react';

class RandomMovie extends React.Component {
  render(){
    return (
      <div>
        {this.props.movies.map(el=>{
          return (
            <div>
              <h1>{el.title}</h1>
              <p>{el.overview}</p>
              <img src={'https://image.tmdb.org/t/p/w500/'+el.poster_path}></img>
            </div>)
        })}
      </div>
    )
  }
}

export default RandomMovie;
