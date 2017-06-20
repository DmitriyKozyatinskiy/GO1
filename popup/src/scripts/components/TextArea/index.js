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
  :focus {
    border: 1px solid #31B8DA;
    border-radius: 4px;
  }
  ::placeholder {
    color: #6C7B7F;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  }
  ::-webkit-scrollbar-thumb {
    background: #cddbe2; 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  ::-webkit-scrollbar-thumb:window-inactive {
	  background: #cddbe2;
  }
`;

class TextArea extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <StyledTextArea { ...this.props } />
    );
  }
}

export default TextArea;
