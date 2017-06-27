import React, { Component } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Wrapper = styled.div`
  height; 50px;
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Tab active>Highest Rated</Tab>
        <Tab>Most Recent</Tab>
      </Wrapper>
    );
  }
}

export default Tabs;
