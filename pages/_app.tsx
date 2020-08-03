import '../styles/globals.css';
import Head from 'next/head'
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer copy="Developed by" />
    </>
  );
}

export default MyApp;
