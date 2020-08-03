import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyles'
import Head from 'next/head';
import Footer from '../components/footer';

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default class MtbxApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Footer copy="Developed by" />
      </ThemeProvider>
    );
  }
}
