function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/solar.jpg')"
      }}
    >

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content */}
      <div className="relative text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          SOLAR CLEANING
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Professional Solar Panel Cleaning Services
        </p>
      </div>

    </section>
  )
}

export default Hero