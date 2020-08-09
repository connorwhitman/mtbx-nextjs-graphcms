import Head from 'next/head'

import ComingSoon from '../components/ComingSoon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MTBX | The Marketing Toolbox</title>
      </Head>

      <main>
        <ComingSoon title="MTBX" tagline="Coming Soon" bg="/csbg.jpg" />
      </main>
      
    </div>
  )
}
