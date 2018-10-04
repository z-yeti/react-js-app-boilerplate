import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Welcome from '../components/Welcome';
import Testing from '../components/Testing';

@inject('store')
@observer
class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Welcome />
        <Testing />
      </Fragment>
    );
  }
}

export default IndexPage;
