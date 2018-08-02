import { action, observable } from 'mobx';

let store = null;

class Store {
  @observable hello = 'Hello World!';
}

export function initStore(isServer) {
  if (isServer) {
    return new Store(isServer);
  } else {
    if (store === null) {
      store = new Store(isServer);
    }
    return store;
  }
}
