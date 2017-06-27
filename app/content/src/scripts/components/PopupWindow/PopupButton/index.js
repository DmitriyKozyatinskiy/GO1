import React, { Component } from 'react';
import './styles.scss';

class PopupButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="GO1__PopupButton" { ...this.props } />
    );
  }
}

export default PopupButton;
