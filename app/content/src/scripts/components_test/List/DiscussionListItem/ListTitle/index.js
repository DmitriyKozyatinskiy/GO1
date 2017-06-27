import styled from 'styled-components';

const ListTitlee = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
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
