import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addNewNote } from './../../../../../actions';
import PopupButton from './PopupButton';
import './styles.scss';

class PopupWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
    }
  }

  onClick(type) {
    const note = {
      type,
      quoteText: this.props.selection.trim(),
      title: this.props.selection.trim(),
    };

    this.props.dispatch(addNewNote(note));
    this.setState({
      isSaved: true,
    });
  }

  render() {
    const width = 160;
    const height = 90;
    const styles = {
      width,
      height,
      top: this.props.coordinates.top - height - 10,
      left: this.props.coordinates.left,
    };

    return (
      <div id="GO1__PopupWindow" style={ styles }>
        <PopupButton onClick={ event => this.onClick('public') }>Create Note</PopupButton>
        <PopupButton onClick={ event => this.onClick('private') }>Private Note</PopupButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // messages: makeSelectMessages(),
});

export default connect(mapStateToProps)(PopupWindow);
