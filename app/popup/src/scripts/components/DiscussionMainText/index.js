import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 0 20px;
  font-size: 14px;
  line-height: 1.5;
`;


class DiscussionMainText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper { ...this.props } />
    );
  }
}

export default DiscussionMainText;
