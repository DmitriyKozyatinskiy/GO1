import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  margin: 10px 0;
  padding: 5px 20px;
  border-top: 1px solid #E3EEF3;
  border-bottom: 1px solid #E3EEF3;
`;

const AmountOfLikes = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const AmountOfReplies = styled.a`
  display: inline-block;
  float: right;
  font-size: 14px;
`;

class DiscussionInfoPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onRepliesClick, amountOfReplies } = this.props;

    return (
      <Wrapper>
        <a href="#">
          <Icon name="like outline" link />
          <AmountOfLikes>3</AmountOfLikes>
        </a>
        <AmountOfReplies href="#" onClick={ event => onRepliesClick(event) }>{ amountOfReplies } Replies</AmountOfReplies>
      </Wrapper>
    );
  }
}

export default DiscussionInfoPanel;
