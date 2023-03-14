import Head from "next/head";
import HomeContain from "./HomeContain";
export default function Home() {
  return (
    <>
      <Head>
        <title>Css Theme Swicher</title>
        <meta name="description" content="Css Theme Swicher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <HomeContain />
      </div>
    </>
  );
}
