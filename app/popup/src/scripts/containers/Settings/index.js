import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import avatar from './avatar.png';
import Header from './../../components/Header';
import Setting from './../../components/Setting';

const TopWrapper = styled.div`
  padding: 42px;
  text-align: center;
  color: #121F22;
  background-color: #F1F6F9;
`;

const UserName = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header path="/settings" />
        <TopWrapper>
          <Image src={ avatar } height="75px" size="tiny" inline />
          <UserName>Tyler Elliott</UserName>
        </TopWrapper>
        <Setting name="Notification" toggler />
        <Setting name="Allow quick button" toggler />
        <Setting name="Sign Out" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Settings);
