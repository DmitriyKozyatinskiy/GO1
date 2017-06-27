import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Icon, Label } from 'semantic-ui-react';
import ListTitle from './ListTitle';
import ListText from './ListText';
import ListDate from './ListDate';

const Wrapper = styled.div`
  position: relative;
  width: 99%;
  padding: 10px 15px;
  :not(:last-of-type) {
    border-bottom: 1px solid #E3EEF3;
  }
`;

const IconWrapper = styled.div`
  width: 14%;
  height: 60px;
  float: left;
  margin-top: 0 !important;
`;

const ContentWrapper  = styled.div`
  width: 86%;
`;

const StyledIcon = styled(Icon)`
  vertical-align: sub !important;
`;

class ListItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const discussion = this.props.discussion;

    return (
      <Wrapper className="clearfix" onClick={ this.props.onClick }>
        { discussion.isSaved ? null : <Label attached="top right" color="teal">NEW</Label> }
        <IconWrapper className="attached">
          <StyledIcon name="user circle" size="big" />
        </IconWrapper>
        <ContentWrapper>
          <ListTitle>{ discussion.title }</ListTitle>
          <ListText>{ discussion.text }</ListText>
          <ListDate>
            <Moment fromNow>{ discussion.timestamp }</Moment>
          </ListDate>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default ListItem;
