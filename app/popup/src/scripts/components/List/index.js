import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-height: 395px;
  overflow: auto;
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

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canceled: false,
    };
  }

  render() {
    return (
      <Wrapper { ...this.props } />
    );
  }
}

export default List;
