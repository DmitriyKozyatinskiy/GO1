import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Push } from 'react-history/Actions'
import styled from 'styled-components';
import ActionButton from './../../components/ActionButton';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  max-height: 80px;
  padding: 15px 0;
  border-top: 1px solid #E3EEF3;
  background-color: ${ props => props.dark ? '#F1F6F9' : '#FFFFFF' };
`;

class Footer extends Component {
  constructor(props) {
    super(props);
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
      <Wrapper { ...this.props }>
        <ActionButton content="Start a discussion" icon="comment" color="black" basic
                      onClick={ event => this.onClick(event, '/startDiscussion') }/>
        <ActionButton content="Add to Portal" icon="add to calendar" color="black" basic
                      onClick={ event => this.onClick(event, '/pageAdded') } />
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Footer);
