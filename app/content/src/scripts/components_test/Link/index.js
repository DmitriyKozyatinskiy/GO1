import React, { Component } from 'react';
import './styles.scss';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="GO1__Link" { ...this.props } />
    );
  }
}

export default Link;
