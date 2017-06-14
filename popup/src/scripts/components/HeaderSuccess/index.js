import React, { Component } from 'react';
import styled from 'styled-components';
import { Push } from 'react-history/Actions'
import { Icon } from 'semantic-ui-react';
import CancelButton from './../CancelButton';

const Wrapper = styled.div`
  height: 200px;
  padding: 20px 40px;
  text-align: center;
  background-color: #F1F6F9;
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  padding: 11px;
  border-radius: 100%;
  text-align: center;
  background-color: #31b8DA;
`;

const TextWrapper = styled.div`
  margin: 15px 0 30px 0;
  line-height: 24px;
  font-weight: bold;
  color: #6c7b7f;
`;


class HeaderSuccess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <CancelButton />
        <IconWrapper>
          <Icon name="check" size="big" inverted />
        </IconWrapper>
        <TextWrapper>
          Page has been successfully <br />
          Added to your portal as New <br />
          Learning item
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default HeaderSuccess;
