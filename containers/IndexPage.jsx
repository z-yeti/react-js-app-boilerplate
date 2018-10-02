import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class IndexPage extends Component {
  render() {
    return (
      <div>
        <p>Next & Express Works</p>
        <p>{process.env.TEST}</p>
        <p>{this.props.store.test}</p>
      </div>
    );
  }
}

export default IndexPage;
