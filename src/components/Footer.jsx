function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row justify-between gap-10">

        {/* Company Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 hover:text-green-400 transition">
            Smart Solar Solutions
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Complete Solar Solutions – Install, Service, Maintain & Finance, All in One.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-green-400">Home</a></li>
            <li><a href="#about" className="hover:text-green-400">About</a></li>
            <li><a href="#services" className="hover:text-green-400">Services</a></li>
            <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>

          <ul className="space-y-3 text-gray-400 text-sm mb-6">
            <li className="flex items-start gap-2">
              <i className="ri-map-pin-line mt-1 text-green-500"></i>
              <a
                href="https://www.google.com/maps?q=649-650, Mahalaxmi Nagar, Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                649-650, Mahalaxmi Nagar, Indore
              </a>
            </li>

            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-green-500"></i>
              <a href="tel:6268314390" className="hover:text-green-400">
                6268314390
              </a>
            </li>

            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-green-500"></i>
              <a href="mailto:sssindorecare@gmail.com" className="hover:text-green-400">
                sssindorecare@gmail.com
              </a>
            </li>
          </ul>

          {/* Get In Touch */}
         
        </div>
 <div>
            <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6268314390"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-800 to-green-400 hover:bg-green-600 px-4 py-2 rounded-md transition"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                WhatsApp
              </a>

              <a
                href="tel:6268314390"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-600 px-4 py-2 rounded-md transition"
              >
                <i className="ri-phone-line text-xl"></i>
                Call
              </a>

              <a
                href="https://www.instagram.com/smart_solar_solutions__?igsh=eWZmMmN5dHNieWls"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-800 to-rose-400 hover:bg-pink-700 px-4 py-2 rounded-md transition"
              >
                <i className="ri-instagram-line text-xl"></i>
                Instagram
              </a>
            </div>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-sm">
        © 2026 Smart Solar Solutions. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;