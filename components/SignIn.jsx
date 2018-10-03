import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { auth } from '../lib/firebase';

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  & input,
  button {
    margin: 0.5em auto;
    border-radius: 2px;
    padding: 0.5em;
  }
  button {
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
class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  onSubmit = event => {
    const { email, password } = this.state;
    const { checkAuthUser, updateByPropertyName } = this.props.store;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        checkAuthUser();
      })
      .then(() => {
        Router.push('/');
      })
      .then(() => {
        this.handleGeolocation();
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };
  render() {
    const { email, password, error } = this.state;
    const { updateByPropertyName } = this.props.store;

    const isInvalid = password === '' || email === '';

    return (
      <Fragment>
        <AuthForm onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName('email', event.target.value))
            }
            type="text"
            placeholder="E-mail"
          />
          <input
            value={password}
            onChange={event =>
              this.setState(
                updateByPropertyName('password', event.target.value)
              )
            }
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </AuthForm>
      </Fragment>
    );
  }
}

export default SignIn;
