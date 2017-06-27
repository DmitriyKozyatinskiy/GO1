import React, { Component } from 'react';
import logo from './logo.png';
import './styles.scss';

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="GO1__LogoWrapper">
        <img src={ logo } />
      </div>
    );
  }
}

export default Logo;
