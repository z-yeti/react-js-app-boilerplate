import React, { Component } from 'react';
import Head from '../components/Head';

class Page extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <div className="page-container">
        <Head title={title} />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}

export default Page;
