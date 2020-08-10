import Head from "next/head";

import ComingSoon from "../components/ComingSoon";

export default function Home({title, timeTillDate, tagline, background}) {

  return (
    <div>
      <Head>
        <title>MTBX | The Marketing Toolbox</title>
      </Head>

      <main>
        <ComingSoon
          title={title}
          tagline={tagline}
          bg={background.url}
          timeTillDate={timeTillDate}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { graphQLClient } = require("../clients/_read_client");
  const query = `
  query ComingSoonQuery{
    comingSoon(where: {label: "ComingSoon"}) {
      title
      timeTillDate
      subhead
      background {
        url
      }
    }
  }
`;

  const { comingSoon: { title, timeTillDate, subhead: tagline, background }} = await graphQLClient.request(query);

  return {
    props: {
      title, timeTillDate, tagline, background
    }
  };
}
