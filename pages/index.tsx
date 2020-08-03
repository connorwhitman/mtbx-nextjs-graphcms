import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://connorwhitman.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.svg" alt="connorwhitman.com Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
