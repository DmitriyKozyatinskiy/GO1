import styled from 'styled-components';

const ListTextt = styled.div`
  line-height: normal; 
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #6C7B7F;
`;

import React, { Component } from 'react';

class ListText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div { ...this.props } />
    );
  }
}

export default ListText;
