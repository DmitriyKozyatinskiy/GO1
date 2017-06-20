import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PageTitle from './../../components/PageTitle';
import TitleInput from './../../components/TitleInput';
import QuoteArea from './../../components/QuoteArea';
import TextArea from './../../components/TextArea';
import Select from './../../components/Select';
// import Button from './../../components/Button';
import { Button } from 'semantic-ui-react';

class StartDiscussion extends Component {
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
        <PageTitle text="START DISCUSSION" />
        <TitleInput placeholder="Discussion topic" />
        <QuoteArea text="optimal size" />
        <TextArea placeholder="Add your Note" />
        <div>
          <Select placeholder="My connections" size="small" options={ selectOptions }/>
          <Button floated="right" primary style={ buttonStyled }>Add Note</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(StartDiscussion);
