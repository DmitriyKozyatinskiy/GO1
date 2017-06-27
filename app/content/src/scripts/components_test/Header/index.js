import React, { Component } from 'react';
import styled from 'styled-components';
import ActionIcon from './ActionIcon';

const Wrapper = styled.div`
  height: 70px;
  padding: 17px;
  background-color: #31B8DA;
`;

const wrapperStyles = {
  height: '70px',
  padding: '17px',
  backgroundColor: '#31B8DA',
};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={ wrapperStyles }>
        <ActionIcon icon="comment" path="/highestRated" />
        <ActionIcon icon="bell" path="/highestRated" />
        <ActionIcon icon="setting" path="/settings" />
      </div>
    );
  }
}

export default Header;
