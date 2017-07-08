import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.h3`
  width: 100%;
  height: 60px;
  margin-top: 0;
  margin-bottom: 15px;
  padding: 15px 20px;
  border-top: 1px solid #E3EEF3;
  border-bottom: 1px solid #E3EEF3;
  border-right: none;
  border-left: none;
  overflow: hidden !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  font-weight: bold;
`;


class DiscussionTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    return (
      <Wrapper title={ text }>{ text }</Wrapper>
    );
  }
}

export default DiscussionTitle;
