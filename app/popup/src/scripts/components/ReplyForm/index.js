import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import { addNewReply } from './../../../../../actions';
import ReplyInput from './../../components/ReplyInput';

class ReplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussionID: this.props.discussion.id,
      text: '',
    };
  }


  onSubmit(event) {
    event.preventDefault();
    const reply = {
      discussionID: this.props.discussion.id,
      parentID: this.props.parentID,
      text: this.state.text,
    };
    this.setState({
      text: '',
    });
    this.props.dispatch(addNewReply(reply));
  }


  onInputChange(event) {
    const input = event.target;
    this.setState({
      [input.name]: input.value,
    });
  }


  render() {
    const { nested } = this.props;

    return (
      <Form onSubmit={ event => this.onSubmit(event) }>
        <ReplyInput
          nested={ nested }
          value={ this.state.text }
          onInputChange={ event => this.onInputChange(event) } />
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(ReplyForm);
