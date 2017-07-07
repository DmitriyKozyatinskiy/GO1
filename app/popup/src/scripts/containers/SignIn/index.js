import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Push } from 'react-history/Actions'
import { saveAuth } from './../../../../../actions';
import styled from 'styled-components';
import Logo from './../../components/Logo';
import Heading from './../../components/Heading';
import Input from './../../components/Input';
import Button from './../../components/Button';
import Divider from './../../components/Divider';
import Link from './../../components/Link';

const Wrapper = styled.div`
  padding: 0 42px;
  color: #121F22;
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      email: '',
      password: '',
    };
  }


  onInputChange(event) {
    const input = event.target;
    this.setState({
      [input.name]: input.value,
    });
  }


  onSubmit(event) {
    event.preventDefault();
    const auth = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.dispatch(saveAuth(auth));
    this.setState(prevState => ({
      submitted: true,
    }));
  }

  render() {
    if (this.state.submitted || (this.props.auth && this.props.auth.email)) {
      return <Push path={ '/discussions' } />
    }

    return (
      <Wrapper>
        <Logo />
        <Heading type={ 3 }>Sign In to GO1</Heading>
        <form onSubmit={ event => this.onSubmit(event) } >
          <Input name="email" type="email"
                 placeholder="E-mail" required onChange={ event => this.onInputChange(event) } />
          <Input name="password" type="password"
                 placeholder="Password" required onChange={ event => this.onInputChange(event) } />
          <Button type="submit">Log In</Button>
          <Divider>Or</Divider>
          <Button type="button" primary onClick={ event => event.preventDefault() }>Register</Button>
          <Link>Forget password?</Link>
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(SignIn);
