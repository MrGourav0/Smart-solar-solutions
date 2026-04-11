function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
    >

      {/* Left Content */}
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-6">
          Professional Solar Panel Cleaning Services
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Dust, dirt, and bird droppings can reduce solar panel efficiency by
          up to 30%. Our professional solar panel cleaning service ensures your
          panels stay clean, efficient, and produce maximum energy for your
          home or business.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          We use eco-friendly cleaning techniques and specialized equipment to
          safely remove dirt without damaging your solar panels.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 text-center">

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg">
          <h3 className="text-3xl font-bold text-green-600">500+</h3>
          <p className="text-gray-600 mt-2">Panels Cleaned</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg">
          <h3 className="text-3xl font-bold text-green-600">1+</h3>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg">
          <h3 className="text-3xl font-bold text-green-600">100%</h3>
          <p className="text-gray-600 mt-2">Customer Satisfaction</p>
        </div>

      </div>

    </section>
  )
}

export default About