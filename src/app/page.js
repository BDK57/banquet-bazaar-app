import Link from 'next/link'
import HeroSection from './components/Resuablecomponents/HeroSection'
import Header from './components/Resuablecomponents/Header'
import Testimonials from './components/Resuablecomponents/Testimonials'
import Footer from './components/Resuablecomponents/Footer'
import Collectionhall from './components/Resuablecomponents/Collectionhall'
export default function Home() {
  return (
    <>
    {/* <Header/> */}
    <HeroSection/>
    <Collectionhall/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
