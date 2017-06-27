import React, { Component } from 'react';
import ListTitle from './ListTitle';
import ListImage from './ListImage';
import ListCheckbox from './ListCheckbox';


class CourseListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper className="clearfix">
        <ListCheckbox />
        <ListImage />
        <ListTitle>Effective Problem-Solving and Decision-Making</ListTitle>
      </Wrapper>
    );
  }
}

export default CourseListItem;
