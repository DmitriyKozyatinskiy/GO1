import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

const StyledButton = styled(Button)`
  display: inline-block !important;
  width: 40%;
  height: 48px;
  margin: 0 20px !important;
  padding: 5px !important;
  border: 1px solid #E3EEF3 !important;
  border-radius: 20px !important;
  box-shadow: 3px 3px 10px 0px rgba(148,143,148,0.7) !important;
  color: #121F22 !important;  
  font-weight: bold !important;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shadowStyling = {
      boxShadow: '3px 3px 10px 0px rgba(148,143,148,0.7) !important',
    };

    return (
      <StyledButton style={ shadowStyling } { ...this.props } />
    );
  }
}

export default Footer;
