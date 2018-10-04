import { action, observable } from 'mobx';
import { auth } from './lib/firebase';

let store = null;

class Store {
  @observable
  test = 'works';

  @observable
  checkingAuthUser = true;

  @observable
  authUser = null;

  @observable
  signInActive = false;

  @observable
  signUpActive = false;

  @action
  checkAuthUser = () => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.authUser = authUser;
        this.checkingAuthUser = false;
      } else {
        this.authUser = null;
        this.checkingAuthUser = false;
      }
    });
  };

  @action
  toggleSignIn = () => {
    this.signInActive = !this.signInActive;
    this.signUpActive = false;
  };

  @action
  toggleSignUp = () => {
    this.signUpActive = !this.signUpActive;
    this.signInActive = false;
  };

  @action
  updateByPropertyName = (propertyName, value) => ({
    [propertyName]: value
  });
}

export function initializeStore(isServer) {
  if (isServer) {
    return new Store(isServer);
  } else if (store === null) {
    store = new Store(isServer);
  }
  return store;
}
