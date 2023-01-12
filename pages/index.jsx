import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Way Brand Strategy & Design Studio</title>
        <meta
          name="keywords"
          content="The Way Brand Strategy & Design Studio"
        />
      </Head>

      <div className="parent-box">
        <div className="box-2">
          <figure className="w-bg">
            <img src="/w-bg1.svg" alt="Brand Strategy & Design Studio" />
          </figure>
        </div>
        {/*  <div className="box-1">
          <Image src="/logo-theway-2.svg" width={128} height={78} />
          <p>We're fixing this website</p>
        </div> */}
      </div>
    </>
  );
}
