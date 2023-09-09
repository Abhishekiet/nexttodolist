import Header from './Components/Header'
import Footer from './Components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './Components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
      
      <Provider>
        
        <Header />
        {children}
        <Footer />
        
      </Provider>
      
      </body>
      
    </html>

  )
}
