import React, { Component } from 'react';
import styled from 'styled-components';
import { Message, Icon } from 'semantic-ui-react';

const StyledMessage = styled(Message)`
  margin: 10px 20px !important;
  padding: 10px 20px !important;
  border: 1px solid #E3EEF3 !important;
  box-shadow: none !important;
  font-size: 16px !important;
  color: #121F22 !important;
`;

class RelatedToPageArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledMessage size="large" title={ this.props.text } warning>
        test
      </StyledMessage>
    );
  }
}

export default RelatedToPageArea;
