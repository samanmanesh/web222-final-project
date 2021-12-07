import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen">
        <Nav />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
