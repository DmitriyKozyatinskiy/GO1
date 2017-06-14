import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderSuccess from './../../components/HeaderSuccess';
import List from './../../components/List';
import Button from './../../components/Button';

const ButtonWrapper = styled.div`
  display: inline-block;
  width: 40%;
  float: right;  
  margin-top: 30px; 
  margin-right: 28px;
  font-size: 13px;
  text-align: right;
  > button {
    border-radius: 20px;
  }
`;

class PageAdded extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderSuccess />
        <List type="courses" />
        <ButtonWrapper>
          <Button primary cancel>No, thanks</Button>
        </ButtonWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(PageAdded);
