import React from 'react';

class Cast extends React.Component {
  render(){
    return (
      <div className='movie__cast'>
        {this.props.cast.map(el=>{
          if(el.profile_path !== null) {
            return (
              <div className='movie__cast-container' key={el.id}>
                <img className='movie__similar-poster hidden' key={el.cast_id} src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}></img>
                <p className='hidden' key={el.name}>{el.name} as {el.character}</p>
              </div>
            )
          } else {
            return (
              <div className='movie__cast-container' key={el.id}>
                <img className='movie__similar-poster hidden' key={el.cast_id} src='images/no-image.png'></img>
                <p className='hidden' key={el.name}>{el.name} as {el.character}</p>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default Cast;
