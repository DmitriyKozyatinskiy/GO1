import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import BackButton from './../BackIcon';

const Wrapper = styled.div`
  height: 60px;
  padding: 10px;
`;

const Title = styled.h4`
  display: inline-block;
  margin: 0;
  margin-left: 80px;
  vertical-align: bottom;
  font-size: 16px;
  font-weight: bold;
`;

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Wrapper>
        <BackButton />
        <Title>{ this.props.text }</Title>
      </Wrapper>
    );
  }
}

export default PageTitle;
