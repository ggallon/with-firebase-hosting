import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Firebase Next Hosting</title>
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <noscript>Enable javascript to run this web app.</noscript>
      </Container>
    );
  }
};
