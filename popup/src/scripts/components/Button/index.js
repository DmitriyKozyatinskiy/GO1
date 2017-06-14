import React, { Component } from 'react';
import styled from 'styled-components';
import { Back } from 'react-history/Actions'

const StyledButton = styled.button`
  width: 100%;
  height: 42px;
  margin: 15px 0;
  padding: 6px;
  border: 2px solid ${ props => props.primary ? '#31B8DA' : '#6C7B7F' };
  border-radius: 4px;
  outline: 0;
  font-weight: bold;
  color: ${ props => props.primary ? '#FFFFFF' : '#121F22' };
  background-color: ${ props => props.primary ? '#31B8DA' : 'transparent' };
  cursor: pointer;
`;

class Button extends Component {
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
    if (this.props.cancel) {
      if (this.state.canceled) {
        return (
          <Back />
        );
      }
      return (
        <StyledButton { ...this.props } onClick={ event => this.onCancel(event) } />
      );
    } else {
      return (
        <StyledButton { ...this.props } />
      );
    }
  }
}

export default Button;
