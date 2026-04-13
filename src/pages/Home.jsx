import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutServices from "../components/AboutServices";
import Services from "../components/Services";
// import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
// import Booking from "../components/Booking";

function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <AboutServices />
      <Services />
      {/* <Benefits /> */}
      {/* <Booking /> */}
      <Footer />
    </div>
  );
}

export default Home;
