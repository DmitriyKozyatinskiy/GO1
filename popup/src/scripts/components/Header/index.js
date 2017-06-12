import React, {Component} from 'react';
// import styled from 'styled-components';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      height: '70px',
      backgroundColor: '#31B8DA',
    };

    return (
      <div style={ styles }></div>
    );
  }
}

export default Header;
