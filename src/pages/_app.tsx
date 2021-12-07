import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp