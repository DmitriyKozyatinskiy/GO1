import React, { Component } from 'react';
import styled from 'styled-components';
import { Push } from 'react-history/Actions'
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  height: 70px;
  padding: 17px;
  background-color: #31B8DA;
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 33%;
  text-align: center;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.path,
      buttonClicked: false,
    };
  }

  componentWillMount() {
    this.setState(prevState => ({ buttonClicked: false }));
  }

  componentWillUnmount() {
    this.setState(prevState => ({ buttonClicked: false }));
  }

  onClick(event, path) {
    this.setState(prevState => ({
      path: path,
      buttonClicked: true,
    }));
  }

  render() {
    if (this.state.buttonClicked) {
      switch(this.state.path) {
        case '/settings':
          return <Push path={ '/settings' } />;
        case '/discussions':
          return <Push path={ '/discussions' } />;
      }
    }

    return (
      <Wrapper>
        <IconWrapper>
          <Icon name="comment" size="large" inverted link onClick={ event => this.onClick(event, '/discussions') } />
        </IconWrapper>
        <IconWrapper>
          <Icon name="bell" size="large" inverted link onClick={ event => this.onClick(event, '/discussions') } />
        </IconWrapper>
        <IconWrapper>
          <Icon name="setting" size="large" inverted link onClick={ event => this.onClick(event, '/settings') } />
        </IconWrapper>
      </Wrapper>
    );
  }
}

export default Header;
