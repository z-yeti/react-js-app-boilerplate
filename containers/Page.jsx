import React, { Component, Fragment } from 'react';
import Head from '../components/Head';

class Page extends Component {
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
