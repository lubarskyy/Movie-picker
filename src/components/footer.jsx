import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <footer className='main__footer'>
        <a href='https://www.themoviedb.org/' target='_blank'><img className='footer__image' src='images/TMDb.png'></img></a>
        <p>Icon made by Freepik from <a className='footer__link' href='http://www.flaticon.com' target='_blank'>www.flaticon.com</a></p>
      </footer>
    )
  }
}

export default Footer;
