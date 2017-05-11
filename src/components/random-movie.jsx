import React from 'react';

class RandomMovie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      YTid: [],
      display: 'none'
    }
  }
  render(){
    return (
      <div>
        {this.props.movies.map((el,index)=>{
          return (
            <section>
            <div className='movie' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${el.backdrop_path})`}}>
              <div className='movie__content'>
                <div>
                  <img className='movie__poster' src={'https://image.tmdb.org/t/p/w500/'+el.poster_path}></img>
                </div>
                <div className='movie__info'>
                  <p className='movie__title'>{el.title}</p>
                  <p className='movie__release'>Release date: {el.release_date}</p>
                  <p className='movie__vote'>Rating: {el.vote_average}/10, based on {el.vote_count} votes</p>
                  <p className='movie__overview'>Overview:</p>
                  <p className='movie__description'>{el.overview}</p>
                </div>
              </div>
            </div>
            <div className='movie__trailer'>
              <iframe className='movie__trailer-video' src={'https://www.youtube.com/embed/'+this.state.YTid[index]}></iframe>
            </div>
            </section>
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
