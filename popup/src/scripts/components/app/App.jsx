import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './../Header';
import 'sanitize.css/sanitize.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      width: '410px',
      height: '584px',
      fontSize: '16px',
      lineHeight: '28px',
      fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      backgroundColor: '#F1F6F9',
    };

    const contentStyles = {
      padding: '42px',
    };
    return (
      <div style={ styles }>
        <Header />
        <div style={ contentStyles }></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
