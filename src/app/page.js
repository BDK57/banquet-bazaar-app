import Link from 'next/link'
import HeroSection from './components/Resuablecomponents/HeroSection'
import BannerSection from './components/Resuablecomponents/BannerSection'
import Header from './components/Resuablecomponents/Header'
import Event from './components/Resuablecomponents/Event'
import Testimonials from './components/Resuablecomponents/Testimonials'
import Subsection from './components/Resuablecomponents/Subsection'
import Footer from './components/Resuablecomponents/Footer'
import { PremiumHall } from '@/helpers/Hallsdata'
import { ClassicalHall } from '@/helpers/Hallsdata'
export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Event title="Premium Halls" PremiumHall={PremiumHall}/>
    <Event title = "Classical Halls" PremiumHall = {ClassicalHall}/>
    <Testimonials/>
    <Footer/>

    </>
  )
}
