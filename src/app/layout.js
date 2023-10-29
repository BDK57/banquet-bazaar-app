
import './globals.css'
import Header from './components/Resuablecomponents/Header';
import toast, { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Banquet-Bazzar-App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Wix+Madefor+Display&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css" rel="stylesheet" />
      </head>
      <body>
        {/* <Header/> */}
        {children}        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet" type="text/css" />
        <div><Toaster /></div>
      </body>
    </html>
  )
}
