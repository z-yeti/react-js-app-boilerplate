import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class HelloWorld extends Component {
  render() {
    const { hello } = this.props.store;
    return <p>{hello}</p>;
  }
}

export default HelloWorld;
