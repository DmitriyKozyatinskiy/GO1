import React, { Component } from 'react';
import { Back } from 'react-history/Actions'
import './styles.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canceled: false,
    };
  }

  onCancel(event) {
    event.preventDefault();
    this.setState(prevState => ({
      canceled: true,
    }));
  }

  render() {
    if (this.props.cancel) {
      if (this.state.canceled) {
        return (
          <Back />
        );
      }
      return (
        <button className={ this.props.primary ? 'GO1__Button--Primary' : 'GO1__Button' }
                { ...this.props } onClick={ event => this.onCancel(event) } />
      );
    } else {
      return (
        <button className={ this.props.primary ? 'GO1__Button--Primary' : 'GO1__Button' }
                { ...this.props } />
      );
    }
  }
}

export default Button;
