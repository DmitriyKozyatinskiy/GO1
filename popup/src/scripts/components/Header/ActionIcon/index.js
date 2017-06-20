import React, { Component } from 'react';
import styled from 'styled-components';
import { Push } from 'react-history/Actions'
import { Icon } from 'semantic-ui-react';


const IconWrapper = styled.div`
  display: inline-block;
  width: 33%;
  text-align: center;
`;

class ActionIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
    };
  }

  
  onClick(event, path) {
    event.preventDefault();
    this.setState(prevState => ({
      path: path,
    }));
  }


  render() {
    return (
      <IconWrapper>
        { this.state.path ? <Push path={ this.state.path } /> : null }
        <Icon name={ this.props.icon } size="large" inverted link onClick={ event => this.onClick(event, this.props.path) } />
      </IconWrapper>
    );
  }
}

export default ActionIcon;
