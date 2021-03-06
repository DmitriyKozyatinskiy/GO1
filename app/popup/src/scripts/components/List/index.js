import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-height: 395px;
  overflow: auto;
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
      <Wrapper className="scrollable" { ...this.props } />
    );
  }
}

export default List;
