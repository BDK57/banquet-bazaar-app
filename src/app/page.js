import Link from 'next/link'
import HeroSection from './components/Resuablecomponents/HeroSection'
import Header from './components/Resuablecomponents/Header'
import Testimonials from './components/Resuablecomponents/Testimonials'
import Footer from './components/Resuablecomponents/Footer'
import Collectionhall from './components/Resuablecomponents/Collectionhall'
import Booksection from './components/Resuablecomponents/Booksection'
import { PremiumHall } from '@/helpers/Hallsdata'
export default function Home() {
  return (
    <>
    <HeroSection/>
    <Collectionhall PremiumHall = {PremiumHall}/>
    {/* <Testimonials/> */}
    {/* <Booksection/> */}
    <Footer/>
    </>
  )
}
