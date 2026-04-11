function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 📄 Content */}
      <div className="relative z-10 text-white text-center px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold text-3xl md:text-4xl">
            Solar Panel Cleaning
          </h1>

          <h3 className="text-gray-200 text-sm md:text-base">
            We provide best solar cleaning services in Indore
          </h3>
        </div>

        <p
          className="
          mt-5 inline-block
          border border-green-400
          px-5 py-2 rounded-full
          text-white font-medium
          hover:bg-green-500 hover:text-black
          transition-all duration-300
          cursor-pointer
        "
        >
          <a href="tel:6268314390">Call Now</a>
        </p>
      </div>

      {/* WhatsApp Button */}
      <div>
        <a
          href="https://wa.me/6268314390?text=Hello%20I%20want%20solar%20panel%20cleaning%20service"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 p-2 w-12 rounded-full bg-green-400 animate__animated animate__heartBeat animate__infinite"
        >
          <i className="ri-whatsapp-line text-white text-3xl"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;