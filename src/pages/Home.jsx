import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Benefits from "../components/Benefits"
import Services from "../components/Services"
import Footer from "../components/Footer"
import Booking from "../components/Booking"



function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Booking/>
      <Footer />
    </div>
  )
}

export default Home