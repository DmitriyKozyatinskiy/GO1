import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Push } from 'react-history/Actions'
import { saveNote, editNote } from './../../../../../actions';
import PageTitle from './../../components/PageTitle';
import TitleInput from './../../components/TitleInput';
import QuoteArea from './../../components/QuoteArea';
import TextArea from './../../components/TextArea';
import Select from './../../components/Select';
import { Button } from 'semantic-ui-react';

class StartDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
      title: props.discussion.title,
      text: props.discussion.text || '',
    }
  }


  onInputChange(event) {
    const input = event.target;
    this.setState({
      [input.name]: input.value,
    });
  }


  onSubmit(event) {
    event.preventDefault();
    const note = this.props.discussion;
    note.title = this.state.title;
    note.text = this.state.text;
    if (note && note.hasOwnProperty('id')) {
      this.props.dispatch(editNote(note));
    } else {
      this.props.dispatch(saveNote(note));
    }
    this.setState({
      isSaved: true,
    });
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

    const discussion = this.props.discussion;

    if (this.state.isSaved) {
      return <Push path={ '/discussions' }/>
    }

    return (
      <form onSubmit={ event => this.onSubmit(event) }>
        <PageTitle text="START DISCUSSION" />
        <TitleInput name="title"
                    value={ this.state.title }
                    onChange={ event => this.onInputChange(event) }
                    placeholder="Discussion topic" />
        { discussion.quoteText ? <QuoteArea text={ discussion.quoteText } /> : null }
        <TextArea name="text"
                  placeholder="Add your Note"
                  value={ this.state.text }
                  onChange={ event => this.onInputChange(event) } />
        <div>
          <Select placeholder="My connections" size="small" options={ selectOptions }/>
          <Button type="submit" floated="right" primary style={ buttonStyled }>Add Note</Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(StartDiscussion);
