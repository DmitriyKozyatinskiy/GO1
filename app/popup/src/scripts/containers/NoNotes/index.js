import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Push } from 'react-history/Actions'
import styled from 'styled-components';
import { Header, Icon, Image } from 'semantic-ui-react'
import PageHeader from './../../components/Header';
import Footer from './../../components/Footer';

const Wrapper = styled.div` 
  height: 400px;
  color: #121F22;
  background-color: #F1F6F9;
`;

const StyledHeader = styled(Header)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSubHeader = styled(Header.Subheader)`
  margin-top: 15px !important;
`;

const StyledIcon = styled(Icon)`
  margin-bottom: 10px;
`;


class HighestRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
    };
  }


  render() {
    if (this.state.path) {
      return <Push path={ this.state.path } />;
    }

    return (
      <div>
        <PageHeader path="/discussions" />
        <Wrapper>
          <StyledHeader as="h3" icon textAlign="center">
            <StyledIcon name="file text outline" />
            <Header.Content>
              There's No Notes on this Page
              <StyledSubHeader>
                Be the first one to add note<br />
                on this page by clicking on below button<br />
                or drag to choose a favourite quote on page
              </StyledSubHeader>
            </Header.Content>
          </StyledHeader>
        </Wrapper>
        <Footer dark />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(HighestRated);
