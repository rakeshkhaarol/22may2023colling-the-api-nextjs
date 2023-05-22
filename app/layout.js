import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css'
import { Inter } from 'next/font/google'
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main className='row ms-3 me-2' >
          <div className='col-3'>
            <LeftAside/>
          </div>
          <div className='col-6 r_section text-white mt-3 mb-3'>
            {children}
          </div>
          <div className='col-3 '>
            <RightAside/>
          </div>
      </main>
      <Footer/>
      </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    </html>
  )
}
