import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Back } from 'react-history/Actions'


class BackIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canceled: false,
    };
  }

  onClick(event) {
    event.preventDefault();
    this.setState(prevState => ({
      canceled: true,
    }));
  }

  render() {
    if (this.state.canceled) {
      return (
        <Back />
      );
    }

    return (
      <Icon name="angle left" size="large" link onClick={ event => this.onClick(event) } />
    );
  }
}

export default BackIcon;
