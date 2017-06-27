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
  font-weight: bold;
`;

const titleStyles = {
  width: '100%',
  height: '60px',
  marginTop: '0',
  marginBottom: '15px',
  padding: '15px 20px',
  borderTop: '1px solid #E3EEF3',
  borderBottom: '1px solid #E3EEF3',
  borderRight: 'none',
  borderLeft: 'none',
  fontWeight: 'bold',
};


class DiscussionTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3 style={ titleStyles }>{ this.props.text }</h3>
    );
  }
}

export default DiscussionTitle;
