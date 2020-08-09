import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyles'
import Fonts from '../theme/fonts'
import Head from 'next/head';
import Footer from '../components/footer';

const theme = {
  colors: {
    primary: '#0070f3'
  },
  fontSize: '1em',
  fontWeight: '400'
}

export default class MtbxApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Create Next App</title>
          <Fonts />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Footer copy="Developed by" />
      </ThemeProvider>
    );
  }
}
