import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding: 8px 30px;
  padding-bottom: ${ props => props.active ? '' : '10px' };
  border-bottom: ${ props => props.active ? '3px solid #31B8DA' : '1px solid #E3EEF3' };
  text-align: center;
  color: ${ props => props.active ? '#31B8DA' : '#8C9FA4' };
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper { ...this.props } />
    );
  }
}

export default Tabs;
