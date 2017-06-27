import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from './../../components/PageTitle';
import DiscussionTitle from './../../components/DiscussionTitle';


class Discussion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectOptions = [{
      key: 'My connections',
      text: 'My connections',
      value: 'My connections',
      icon: 'user',
      selected: true,
    }];

    const buttonStyled = {
      marginRight: '20px',
      marginBottom: '20px',
      backgroundColor: '#31B8DA',
    };

    return (
      <div>
        <PageTitle text="DISCUSSION" />
        <DiscussionTitle text="Animation Course Idea" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Discussion);
