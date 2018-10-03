import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { auth } from '../lib/firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthDiv = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  padding: 2em 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d3234;
  color: #dbdfe1;
  text-align: center;
`;
const AuthTitle = styled.p`
  background-color: #2d3234;
  color: #dbdfe1;
  text-align: center;
  padding: 1em 0 0;
  font-size: 2em;
`;
const AuthStatus = styled.p``;
const ButtonContainer = styled.div`
  display: flex;
  width: 175px;
  margin: 1em auto;
  justify-content: space-between;
  & button {
    background: transparent;
    color: #dbdfe1;
    font-size: 1em;
    border: 1px solid;
    border-radius: 2px;
    padding: 0.5em;
  }
`;
const SignOutButton = styled.button`
  background: transparent;
  color: #dbdfe1;
  font-size: 1em;
  border: 1px solid;
  border-radius: 2px;
  padding: 0.5em;
`;

@inject('store')
@observer
class Auth extends Component {
  handleSignOutClick = () => {
    auth
      .signOut()
      .then(function() {
        Router.push(`/`);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const {
      authUser,
      signInActive,
      signUpActive,
      toggleSignIn,
      toggleSignUp
    } = this.props.store;
    return (
      <Fragment>
        <AuthTitle>Firebase Testing</AuthTitle>
        <AuthDiv>
          {!authUser && (
            <Fragment>
              <AuthStatus>Currently: Signed Out</AuthStatus>
              <ButtonContainer>
                <button onClick={toggleSignUp}>Sign Up</button>
                <button onClick={toggleSignIn}>Sign In</button>
              </ButtonContainer>
              {signUpActive && <SignUp />}
              {signInActive && <SignIn />}
            </Fragment>
          )}
          {authUser && (
            <Fragment>
              <AuthStatus>Currently: Signed In</AuthStatus>
              <SignOutButton onClick={this.handleSignOutClick}>
                Sign Out
              </SignOutButton>
            </Fragment>
          )}
        </AuthDiv>
      </Fragment>
    );
  }
}

export default Auth;
