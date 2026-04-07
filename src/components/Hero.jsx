import 'animate.css';
function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/solar.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content */}
      <div className="relative text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold  tracking-wide animate__animated animate__pulse animate__infinite">
          SOLAR CLEANING
        </h1>

        <p className="mt-4 text-lg md:text-xl font-poppins animate__animated animate__backInUp ">
          Professional Solar Panel Cleaning Services
        </p>
        <a
          href="https://wa.me/6268314390?text=Hello%20I%20want%20solar%20panel%20cleaning%20service"
          target="_blank"
          className="fixed bottom-5 right-5  p-1 w-12 h-auto rounded-full bg-green-400  text-white animate__animated animate__heartBeat animate__infinite "
        >
          <i className="ri-whatsapp-line text-white text-3xl "></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
