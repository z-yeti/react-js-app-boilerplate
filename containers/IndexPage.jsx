import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Welcome from '../components/Welcome';
import Testing from '../components/Testing';
import Auth from '../components/Auth';

@inject('store')
@observer
class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Welcome />
        <Testing />
        <Auth />
      </Fragment>
    );
  }
}

export default IndexPage;
