import Head from 'next/head'

import ComingSoon from '../components/ComingSoon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MTBX | The Marketing Toolbox</title>
      </Head>

      <main>
        <ComingSoon bg="../public/csbg.jpg" />
      </main>
      
    </div>
  )
}
