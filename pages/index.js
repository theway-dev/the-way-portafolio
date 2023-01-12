import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="The Way Brand Strategy & Design Studio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="content">
          <div className="parent-box">
            <div className="box-2">
              <figure className="w-bg">
                <img src="/w-bg1.svg" alt="Brand Strategy & Design Studio" />
              </figure>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
