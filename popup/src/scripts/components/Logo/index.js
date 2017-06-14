import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Wrapper = styled.div`
  height: 120px;
  padding: 37px;
  text-align: center;
`;

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <img src={ logo } />
      </Wrapper>
    );
  }
}

export default Logo;
