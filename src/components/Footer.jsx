function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white hover:text-green-400">
            Smart solar solutions
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Professional solar panel cleaning services helping
            homes and businesses maintain maximum solar
            efficiency and energy production.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-green-400">Home</a></li>
            <li><a href="#about" className="hover:text-green-400">About</a></li>
            <li><a href="#services" className="hover:text-green-400">Services</a></li>
            <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Residential Panel Cleaning</li>
            <li>Commercial Solar Cleaning</li>
            <li>Solar Maintenance</li>
            <li>Inspection & Efficiency Check</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Contact
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li><i className="ri-map-pin-line"></i> Madhya Pradesh, Indore</li>
            <li><i className="ri-phone-line"></i> +91 6268314390</li>
            <li><i className="ri-mail-line"></i> sssindorecare.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-400 text-sm">
        © 2026 Smart solar solutions. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer