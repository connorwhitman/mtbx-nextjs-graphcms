import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MTBX | The Marketing Toolbox</title>
      </Head>

      <main>
        <h1>mtbx</h1>
        <h4>The Marketing Toolbox</h4>
      </main>
      
    </div>
  )
}
