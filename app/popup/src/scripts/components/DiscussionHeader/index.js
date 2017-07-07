import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import Moment from 'react-moment';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const UserName = styled.span`
  display: inline-block;
  margin-left: 6px;
  vertical-align: super;
  line-height: normal;
  font-size: 14px;
  font-weight: bold;
`;

const DateContainer = styled.span`
  display: inline-block;
  float: right;
  line-height: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: italic;
  color: #6C7B7F;
`;

class DiscussionHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { discussion } = this.props;

    return (
      <Wrapper>
        <Image icon="user" avatar />
        <UserName>Peter Parker</UserName>
        <DateContainer>
          <Moment fromNow>{ discussion.timestamp }</Moment>
        </DateContainer>
      </Wrapper>
    );
  }
}

export default DiscussionHeader;
