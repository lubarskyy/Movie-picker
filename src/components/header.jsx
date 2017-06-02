import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <header className='main__header'>
        <div className='max-width'>
          <div className='header__content'>
            <a href='/movie-picker'><img className='header__logo' src='images/movie-icon.png'/></a>
            <h1 className='header__title'>
              Movie Picker
            </h1>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
