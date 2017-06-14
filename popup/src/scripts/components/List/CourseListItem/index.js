import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox, Image } from 'semantic-ui-react'
import ListTitle from './ListTitle';
import logo from './logo.png';

const Wrapper = styled.div`
  width: 85%;
  margin: 0 30px;
  padding: 10px 0;
  border-bottom: 1px solid #E3EEF3;
`;

const ListCheckbox = styled(Checkbox)`
  vertical-align: text-bottom !important;
`;

const ListImage = styled(Image)`
  margin-left: 10px;
  vertical-align: super;
`;

class CourseListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="clearfix">
        <ListCheckbox />
        <ListImage src={ logo } size="mini" inline />
        <ListTitle>Effective Problem-Solving and Decision-Making</ListTitle>
      </Wrapper>
    );
  }
}

export default CourseListItem;
