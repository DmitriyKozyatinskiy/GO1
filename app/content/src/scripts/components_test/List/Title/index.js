import styled from 'styled-components';

const Title = styled.div`
  display: inline-block;
  width: 77%;
  max-height: 30px;
  float: right;
  margin-left: 10px;
  line-height: normal;
  font-size: 13px;
  font-weight: bold;
  color: #8c9fa4;
`;

import React, { Component } from 'react';

class ListTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div { ...this.props } />
    );
  }
}

export default ListTitle;
