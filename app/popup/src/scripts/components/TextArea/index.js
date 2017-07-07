import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: calc(100% - 40px);
  min-height: 200px;
  margin: 0 20px 15px 20px;
  padding: 15px;
  border: 1px solid #E3EEF3;
  border-radius: 4px;
  resize: none;
  outline: 0;
  color: #121F22;
`;

class TextArea extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <StyledTextArea className="scrollable" { ...this.props } />
    );
  }
}

export default TextArea;
