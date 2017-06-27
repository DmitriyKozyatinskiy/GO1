import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Back } from 'react-history/Actions'

const ButtonWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledButton = styled(Button)`
  background-color: transparent !important;
`;

class CancelButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canceled: false,
    };
  }

  onCancel(event) {
    event.preventDefault();
    this.setState(prevState => ({
      canceled: true,
    }));
  }

  render() {
    if (this.state.canceled) {
      return (
        <Back />
      );
    }

    return (
      <ButtonWrapper>
        <StyledButton icon="remove" size="mini" onClick={ event => this.onCancel(event) } { ...this.props } />
      </ButtonWrapper>
    );
  }
}

export default CancelButton;
