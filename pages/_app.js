import Navbar from '../components/Navbar';
import '../styles/globals.css';
import '../styles/Toggle.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
