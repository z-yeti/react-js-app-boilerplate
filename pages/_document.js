import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font: 16px Lato;
    background-color: #dbdfe1;
  }
  ul,
  li,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  svg {
    max-width: 1em;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
