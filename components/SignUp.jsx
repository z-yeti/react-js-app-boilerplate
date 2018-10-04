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
        auth.currentUser.updateProfile({
          displayName: username
        });
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
    const formInputs = [
      //['value/stateName', 'type', 'placeholder']
      [username, 'username', 'text', 'Username'],
      [email, 'email', 'text', 'E-mail'],
      [passwordOne, 'passwordOne', 'password', 'Password'],
      [passwordTwo, 'passwordTwo', 'password', 'Confirm Password']
    ];
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <AuthForm onSubmit={this.onSubmit}>
        {formInputs.map(formInput => {
          const inputKey = formInput[3].toLowerCase().replace(/\s+/g, '-');
          return (
            <input
              key={inputKey}
              value={formInput[0]}
              onChange={event =>
                this.setState(
                  updateByPropertyName(formInput[1], event.target.value)
                )
              }
              type={formInput[2]}
              placeholder={formInput[3]}
            />
          );
        })}
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </AuthForm>
    );
  }
}

export default SignUp;
