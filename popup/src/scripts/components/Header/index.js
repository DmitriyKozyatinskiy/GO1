import React, { Component } from 'react';
import styled from 'styled-components';
import ActionIcon from './ActionIcon';

const Wrapper = styled.div`
  height: 70px;
  padding: 17px;
  background-color: #31B8DA;
`;


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <ActionIcon icon="comment" path="/discussions" />
        <ActionIcon icon="bell" path="/discussions" />
        <ActionIcon icon="setting" path="/settings" />
      </Wrapper>
    );
  }
}

export default Header;
