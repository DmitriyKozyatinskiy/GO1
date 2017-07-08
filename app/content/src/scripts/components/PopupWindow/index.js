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
      title: this.props.selection,
      quoteText: this.props.selection,
    };

    this.props.dispatch(addNewNote(note));
    this.setState({
      isSaved: true,
    });
  }

  render() {
    const height = 90;
    const styles = {
      top: this.props.coordinates.top - height - 10,
      left: this.props.coordinates.left,
    };

    if (this.state.isSaved) {
      return null;
    }

    return (
      <div id="GO1__PopupWindow" style={ styles }>
        <PopupButton onClick={ event => this.onClick('public') }>
          <i className="material-icons">chat</i>
          <span>Create Note</span>
        </PopupButton>
        <PopupButton onClick={ event => this.onClick('private') }>
          <i className="material-icons">assignment</i>
          <span>Private Note</span>
        </PopupButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // messages: makeSelectMessages(),
});

export default connect(mapStateToProps)(PopupWindow);
