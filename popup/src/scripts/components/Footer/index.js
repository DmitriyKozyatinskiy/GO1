import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  max-height: 80px;
  padding: 15px 0;
  border-top: 1px solid #E3EEF3;
  background-color: #FFFFFF;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper { ...this.props } />
    );
  }
}

export default Footer;
