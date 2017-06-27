import React, { Component } from 'react';
import styled from 'styled-components';
import { Radio }  from 'semantic-ui-react';

const StyledToggler = styled(Radio).attrs({
  toggle: true,
})`
  float: right;
  label::before {
    background-color: #31B8DA !important;
  }
  label::before, label::after {
    height: 1.9rem !important;
  }
`;

class Toggler extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledToggler toggle/>
    );
  }
}

export default Toggler;
