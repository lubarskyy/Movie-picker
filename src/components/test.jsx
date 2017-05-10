import React from 'react';

class Test extends React.Component {
  render(){
    return <button onClick={this.clickMofo}>POKA SOWE</button>
  }
  clickMofo = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&year=2017&with_runtime.lte=120')
    .then(response=>{
      response.json().then(data=>{
        console.log(data.results);
        fetch('https://api.themoviedb.org/3/movie/'+data.results[Math.floor(Math.random()*19)].id+'?api_key=c77922b9a6b67bfd89b55cf3dfd8d3fc&language=en-US')
        .then(response=>{
          response.json().then(data=>{
            console.log(data)
          })
        })
      })
    })
  }
}

export default Test;
