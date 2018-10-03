import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { auth, db } from '../lib/firebase';

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  & input,
  button {
    margin: 0.5em auto;
    border-radius: 2px;
    padding: 0.5em;
  }
  & button {
    background: none;
    border: 1px solid;
    color: #dbdfe1;
  }
  & button:disabled {
    cursor: not-allowed;
  }
  & input {
    border: none;
  }
`;

@inject('store')
@observer
class SignUp extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  };
  doCreateUser = (id, username, email) => {
    db.ref(`users/${id}`).set({
      username,
      email
    });
  };
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { checkAuthUser, updateByPropertyName } = this.props.store;
    auth
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.doCreateUser(authUser.user.uid, username, email);
      })
      .then(() => {
        checkAuthUser();
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const { updateByPropertyName } = this.props.store;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <AuthForm onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event =>
            this.setState(updateByPropertyName('username', event.target.value))
          }
          type="text"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName('email', event.target.value))
          }
          type="text"
          placeholder="Email"
        />
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(
              updateByPropertyName('passwordOne', event.target.value)
            )
          }
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(
              updateByPropertyName('passwordTwo', event.target.value)
            )
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </AuthForm>
    );
  }
}

export default SignUp;
