import '../styles/globals.css';
import App from "../Component/App";
import Footer from '../Component/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{position:"absolute", top: 0, left: 0, width:"100%",}}>
      <App />
      
        <Component {...pageProps} />
           
      <Footer />
    </div>
  )
}

export default MyApp
