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
        {this.props.movies.map(el=>{
          return (
            <div>
              <h1>{el.title}</h1>
              <p>{el.overview}</p>
              <img src={'https://image.tmdb.org/t/p/w500/'+el.poster_path}></img>
            </div>
          )
        })}
        {this.state.YTid.map(el=>{
          return <iframe src={'https://www.youtube.com/embed/'+el}></iframe>
        })}
      </div>
    )
  }
  componentDidUpdate() {
    let youTubeLinks = [];
    if(this.state.YTid.length == 0){
      this.props.movies.forEach(el=>{
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
