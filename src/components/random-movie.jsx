import React from 'react';

class RandomMovie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      YTid: [],
    }
  }
  render(){
    return (
      <div>
        {this.props.movies.map((el,index)=>{
          return (
            <div className='movie' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${el.backdrop_path})`}}>
              <div className='movie__content'>
                <div>
                  <img className='movie__poster' src={'https://image.tmdb.org/t/p/w500/'+el.poster_path}></img>
                </div>
                <div>
                  <h1>{el.title}</h1>
                  <h2>Realese date: {el.release_date}</h2>
                  <h2>Rating: {el.vote_average}/10, based on {el.vote_count} votes</h2>
                  <p>{el.overview}</p>
                  <iframe src={'https://www.youtube.com/embed/'+this.state.YTid[index]}></iframe>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  componentDidUpdate() {
    let youTubeLinks = [];
    if(this.state.YTid.length === 0){
      this.props.movies.map(el=>{
        fetch('https://api.themoviedb.org/3/movie/'+el.id+'/videos?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US')
        .then(response=>{
          response.json().then(data=>{
            youTubeLinks.push(data.results[0].key)
            this.setState({YTid: youTubeLinks})
          })
        })
      })
    }
  }
}

export default RandomMovie;

// {this.state.YTid.map(el=>{
//   return <iframe src={'https://www.youtube.com/embed/'+el}></iframe>
// })}

// <img src={'https://image.tmdb.org/t/p/w500/'+el.backdrop_path}></img>
