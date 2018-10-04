import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from '../lib/firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

library.add(faSpinner);

const AuthDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 350px;
  padding: 2em 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #2d3234;
  color: #dbdfe1;
  text-align: center;
`;
const LoadingDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2d3234;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    font-size: 3em;
  }
`;
const AuthTitle = styled.p`
  background-color: #2d3234;
  color: #dbdfe1;
  text-align: center;
  font-size: 2em;
`;
const AuthStatus = styled.p`
  font-size: 1.5em;
`;
const AuthInfo = styled.p`
  font-size: 1.25em;
`;
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
      .then(() => {
        Router.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      checkingAuthUser,
      authUser,
      signInActive,
      signUpActive,
      toggleSignIn,
      toggleSignUp
    } = this.props.store;
    if (authUser) {
      const { displayName, email } = auth.currentUser;
    }
    return (
      <AuthDiv>
        <Fragment>
          {checkingAuthUser && (
            <LoadingDiv>
              <FontAwesomeIcon icon="spinner" pulse />
            </LoadingDiv>
          )}
        </Fragment>
        <AuthTitle>Firebase Testing</AuthTitle>
        {!authUser && (
          <Fragment>
            <AuthStatus>Currently: Signed Out</AuthStatus>
            <ButtonContainer>
              <button type="button" onClick={toggleSignUp}>
                Sign Up
              </button>
              <button type="button" onClick={toggleSignIn}>
                Sign In
              </button>
            </ButtonContainer>
            {signUpActive && <SignUp />}
            {signInActive && <SignIn />}
          </Fragment>
        )}
        {authUser && (
          <Fragment>
            <AuthStatus>Currently: Signed In</AuthStatus>
            <AuthInfo>
              Hello:
              {auth.currentUser.displayName}
            </AuthInfo>
            <AuthInfo>
              Email:
              {auth.currentUser.email}
            </AuthInfo>
            <SignOutButton onClick={this.handleSignOutClick}>
              Sign Out
            </SignOutButton>
          </Fragment>
        )}
      </AuthDiv>
    );
  }
}

export default Auth;
