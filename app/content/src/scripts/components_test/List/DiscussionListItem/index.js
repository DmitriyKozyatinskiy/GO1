import React, { Component } from 'react';
import styled from 'styled-components';
import ListTitle from './ListTitle';
import ListText from './ListText';
import ListDate from './ListDate';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  :not(:last-of-type) {
    border-bottom: 1px solid #E3EEF3;
  }
`;

class ListItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Wrapper>
        <ListTitle>{ this.props.title }</ListTitle>
        <ListText>{ this.props.content }</ListText>
        <ListDate>{ this.props.date }</ListDate>
      </Wrapper>
    );
  }
}

export default ListItem;
