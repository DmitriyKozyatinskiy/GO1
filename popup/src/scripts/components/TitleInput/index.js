import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  padding: 15px 20px;
  border-top: 1px solid #E3EEF3;
  border-bottom: 1px solid #E3EEF3;
  border-right: none;
  border-left: none;
  outline: 0;
  color: #121F22;
  :focus {
    border-top: 1px solid #31B8DA;
    border-bottom: 1px solid #31B8DA;
    border-right: none;
    border-left: none;
  }
  ::placeholder {
    color: #6C7B7F;
  }
`;

class TitleInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledInput { ...this.props } />
    );
  }
}

export default TitleInput;
