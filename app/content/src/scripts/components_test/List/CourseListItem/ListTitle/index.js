import React, { Component } from 'react';

class ListTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div { ...this.props } />
    );
  }
}

export default ListTitle;
