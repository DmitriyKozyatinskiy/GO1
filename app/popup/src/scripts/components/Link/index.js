import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
  color: #31B8DA;
  cursor: pointer;
`;

class Link extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <StyledButton { ...this.props } />
    );
  }
}

export default Link;
