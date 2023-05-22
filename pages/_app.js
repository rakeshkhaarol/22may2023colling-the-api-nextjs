
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../app/globals.css'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";




export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Header/>
        <main className='row ms-3 me-2' >
            <div className='col-3'>
                <LeftAside/>
            </div>
            <div className='col-6 r_section text-white mt-3 mb-3'>
                <Component {...pageProps} />
            </div>
            <div className='col-3 '>
                <RightAside/>
            </div>
        </main>
        <Footer/>  
      </>
    );
  }