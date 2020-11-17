import '../styles/globals.css'
import LazyHydrate from "react-lazy-hydration";

function MyApp({ Component, pageProps }) {
  return <LazyHydrate ssrOnly><Component {...pageProps} /></LazyHydrate>
}

export default MyApp
