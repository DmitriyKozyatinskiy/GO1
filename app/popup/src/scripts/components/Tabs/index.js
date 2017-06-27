import React, { Component } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Wrapper = styled.div`
  heigth; 50px;
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Tab active>Most Recent</Tab>
        <Tab>Highest Rated</Tab>
      </Wrapper>
    );
  }
}

export default Tabs;
