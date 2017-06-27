import React, { Component } from 'react';
import styled from 'styled-components';
import SemanticDivider from 'semantic-ui-react/dist/es/elements/Divider';

class Divider extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <SemanticDivider horizontal { ...this.props } />
    );
  }
}

export default Divider;
