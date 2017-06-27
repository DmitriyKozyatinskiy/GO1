import React, { Component } from 'react';
import styled from 'styled-components';
import { Message, Icon } from 'semantic-ui-react';

const StyledMessage = styled(Message)`
  margin: 10px 20px !important;
  padding: 10px 20px !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 16px !important;
  color: #121F22 !important;
`;

class QuoteArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledMessage size="large" warning>
        <Icon name="quote left" size="small" />
        { this.props.text }
      </StyledMessage>
    );
  }
}

export default QuoteArea;
