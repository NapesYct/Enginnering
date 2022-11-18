import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { AuthContextProvider } from '../context/AuthContext'
// import { useRouter } from 'next/router';
// import Protected from '../components/Protected';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </AuthContextProvider>
  )
}

export default MyApp
