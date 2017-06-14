import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #E3EEF3;
  border-radius: 4px;
  outline: 0;
  color: #121F22;
  background-color: #F1F6F9;
  :focus {
    border: 1px solid #31B8DA;
    border-radius: 4px;
    box-shadow: inset 1px 1px 1px #31B8DA, 1px 1px 1px #31B8DA;
  }
  ::placeholder {
    color: #6C7B7F;
  }
`;

class Input extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <StyledInput { ...this.props } />
    );
  }
}

export default Input;
