import React, { Component } from 'react';
import styled from 'styled-components';
import SemanticSelect from 'semantic-ui-react/dist/es/addons/Select';

const StyledSelect = styled(SemanticSelect)`
  height: 36px !important;
  min-height: 36px !important;
  margin-left: 20px;
  padding: 11px !important;
  color: #121F22 !important;
`;

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledSelect { ...this.props } />
    );
  }
}

export default Select;
