import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { Push } from 'react-history/Actions'
// import { makeSelectNotes } from './../../selectors'
import Header from './../../components/Header';
import Tabs from './../../components/Tabs';
import List from './../../components/List';
import DiscussionListItem from './../../components/List/DiscussionListItem';
import Footer from './../../components/Footer';


const Wrapper = styled.div`
  color: #121F22;
`;


class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedDiscussion: null,
    }
  }

  onClick(discussion) {
    this.setState({
      openedDiscussion: discussion,
    });
  }

  getDiscussions() {
    const discussions = [];
    if (this.props.notes) {
      this.props.notes.forEach((item, i) => {
        discussions.push(<DiscussionListItem onClick={ event => this.onClick(item) } key={ i } discussion={ item } />);
      });
    }
    return discussions;
  }

  render() {
    if (this.props.notes && !this.props.notes.length) {
      return <Push path={ '/noNotes' }/>
    }

    if (this.state.openedDiscussion) {
      return <Push location={{
        pathname: '/discussion',
        state: {
          discussion: this.state.openedDiscussion,
        },
      }} />
    }

    return (
      <Wrapper>
        <Header path="/discussions" />
        <Tabs />
        <List type="discussions">
          { this.getDiscussions() }
        </List>
        <Footer />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('NOTES: ', state.notes);
  return {
    notes: state.notes.sort((noteA, noteB) => {
      return noteB.timestamp - noteA.timestamp;
    }),
  };
};

// const mapStateToProps = createStructuredSelector({
//   notes: makeSelectNotes(),
// });

export default connect(mapStateToProps)(Discussions);
