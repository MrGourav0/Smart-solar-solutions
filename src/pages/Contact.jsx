import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600">
            Have questions or want to book a solar panel cleaning service?
            Get in touch with us today.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Address
              </h3>
              <p className="text-gray-600">
                649-650, Sector A, Mahalaxmi Nagar, Indore, Madhya Pradesh, 452010
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Phone
              </h3>
              <p className="text-gray-600">
                +91 6268314390
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Email
              </h3>
              <p className="text-gray-600">
               sssindorecare.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Mon - Sat : 9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6">

            <div>
              <label className="block text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;