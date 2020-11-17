import '../styles/globals.css'
import LazyHydrate from "react-lazy-hydration";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
