import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Push } from 'react-history/Actions'
import { editNote } from './../../../../../actions';
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

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  };

  onTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const note = this.props.discussion;
    note.title = this.state.title;
    note.text = this.state.text;
    note.isSaved = true;

    this.props.dispatch(editNote(note));
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
        <TitleInput value={ this.state.title }
                    onChange={ event => this.onTitleChange(event) }
                    placeholder="Discussion topic" />
        { discussion.quoteText ? <QuoteArea text={ discussion.quoteText } /> : null }
        <TextArea placeholder="Add your Note"
                  value={ this.state.text }
                  onChange={ event => this.onTextChange(event) } />
        <div>
          <Select placeholder="My connections" size="small" options={ selectOptions }/>
          <Button type="submit" floated="right" primary style={ buttonStyled }>Add Note</Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(StartDiscussion);
