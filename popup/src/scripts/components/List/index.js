import React, { Component } from 'react';
import styled from 'styled-components';
import DiscussionListItem from './DiscussionListItem';
import CourseListItem from './CourseListItem';

const Wrapper = styled.div`
  width: 100%;
  max-height: 395px;
  margin-top: 8px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  }
  ::-webkit-scrollbar-thumb {
    background: #cddbe2; 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  ::-webkit-scrollbar-thumb:window-inactive {
	  background: #cddbe2;
  }
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canceled: false,
    };
  }

  render() {
    const data = {
      title: 'Animation course idea',
      content: 'Peter Parker: Yes, I agree with you man',
      date: '2 Days ago',
    };

    if (this.props.type === 'courses') {
      return (
        <div>
          <Wrapper>
            <CourseListItem />
            <CourseListItem />
            <CourseListItem />
          </Wrapper>
        </div>
      );
    } else {
      return (
        <Wrapper>
          <DiscussionListItem { ...data } />
          <DiscussionListItem { ...data } />
          <DiscussionListItem { ...data } />
          <DiscussionListItem { ...data } />
          <DiscussionListItem { ...data } />
          <DiscussionListItem { ...data } />
          <DiscussionListItem { ...data } />
        </Wrapper>
      );
    }
  }
}

export default List;
