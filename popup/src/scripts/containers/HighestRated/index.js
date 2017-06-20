import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Push } from 'react-history/Actions'
import styled from 'styled-components';
import Header from './../../components/Header';
import Tabs from './../../components/Tabs';
import List from './../../components/List';
import Footer from './../../components/Footer';
import ActionButton from './../../components/ActionButton';


const Wrapper = styled.div`
  color: #121F22;
`;


class HighestRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
    };
  }

  componentWillMount() {
    this.setState(prevState => ({ path: '' }));
  }

  onClick(event, path) {
    this.setState(prevState => ({
      path: path,
    }));
  }

  render() {
    if (this.state.path) {
      return <Push path={ this.state.path } />;
    }

    return (
      <Wrapper>
        <Header path="/discussions" />
        <Tabs />
        <List type="discussions" />
        <Footer>
          <ActionButton content="Start a discussion" icon="comment" color="black" basic
                        onClick={ event => this.onClick(event, '/startDiscussion') }/>
          <ActionButton content="Add to Portal" icon="add to calendar" color="black" basic
                        onClick={ event => this.onClick(event, '/pageAdded') } />
        </Footer>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(HighestRated);
