function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white hover:text-green-400">
            Smart solar solutions
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Professional solar panel cleaning services helping homes and
            businesses maintain maximum solar efficiency and energy production.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-400">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-green-400">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Our Services</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Residential Panel Cleaning</li>
            <li>Commercial Solar Cleaning</li>
            <li>Solar Maintenance</li>
            <li>Inspection & Efficiency Check</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>

          <ul className="space-y-2 text-gray-400 text-sm ">
            <li className="hover:text-green-500">
              <i className="ri-map-pin-line"></i>{" "}
              <a
                href="https://www.google.com/maps?q=649-650,+Sector+A,+Mahalaxmi+Nagar,+Indore,+Madhya+Pradesh,+452010"
                target="_blank"
                rel="noopener noreferrer"
              >
                649-650, Sector A, Mahalaxmi Nagar, Indore, Madhya Pradesh,
                452010
              </a>
            </li>
            <li className="hover:text-green-500">
              <i className="ri-phone-line"></i>{" "}
              <a href="tel:6268314390">6268314390</a>
            </li>
            <li className="hover:text-green-500">
              <i className="ri-mail-line"></i>{" "}
              <a href="mailto:sssindorecare.com">sssindorecare.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-400 text-sm">
        © 2026 Smart Solar Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
