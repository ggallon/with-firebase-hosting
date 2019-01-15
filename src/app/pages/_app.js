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
        <noscript>To see this page, you must enable JavaScript.</noscript>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
};
