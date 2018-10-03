import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Head from '../components/Head';

@inject('store')
@observer
class Page extends Component {
  componentDidMount() {
    this.props.store.checkAuthUser();
  }
  render() {
    const { children, title } = this.props;

    return (
      <Fragment>
        <Head title={title} />
        <div className="page-container">
          <React.Fragment>{children}</React.Fragment>
        </div>
      </Fragment>
    );
  }
}

export default Page;
