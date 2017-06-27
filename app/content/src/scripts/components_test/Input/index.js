import React, { Component } from 'react';
import './styles.scss';

class Input extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <input className="GO1__Input" { ...this.props } />
    );
  }
}

export default Input;
