import React, { Component } from 'react';
import styled from 'styled-components';
import Toggler from './../Toggler';

const Wrapper = styled.div`
  padding: 12px 20px 8px 20px;
  border-bottom: 1px solid #E3EEF3;
`;

const SettingName = styled.span`
  vertical-align: top;
`;

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <SettingName>{ this.props.name }</SettingName>
        { this.props.toggler ? <Toggler /> : null }
      </Wrapper>
    );
  }
}

export default Setting;
