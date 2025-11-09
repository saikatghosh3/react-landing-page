

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Introduce from './components/Introduce'
import LightSection from './components/LightSection'
import ReadyMadeSection from './components/ReadyMadeSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Introduce/>
       <LightSection/>
       <ReadyMadeSection/>
       <AboutSection />
       <ContactSection />
       <Footer/>
       <ScrollToTop/>
    </>
  )
}

export default App
