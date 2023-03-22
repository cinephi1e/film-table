import Layout from "@/components/Layout";
import Main from "@/components/main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Film Table</title>
        <meta
          name="Film Table"
          content="시네필에 의한, 시네필을 위한 영화제 시간표 서비스"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </Layout>
  );
}
