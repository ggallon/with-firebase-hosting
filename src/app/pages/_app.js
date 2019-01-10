import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <main>
      <Header />
      {children}
    </main>
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}
