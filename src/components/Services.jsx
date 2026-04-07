const services = [
  {
    title: "Residential Solar Panel Cleaning",
    desc: "Keep your home solar panels clean and efficient. Our professional cleaning removes dust, dirt, and bird droppings to maximize energy production."
  },
  {
    title: "Commercial Solar Cleaning",
    desc: "Large-scale cleaning solutions for offices, factories, and solar farms to maintain peak solar performance."
  },
  {
    title: "Solar Panel Inspection",
    desc: "We inspect your panels for dirt buildup, damage, and performance issues to ensure optimal solar output."
  },
  {
    title: "Eco-Friendly Cleaning",
    desc: "Our cleaning methods use purified water and eco-safe techniques that protect your solar panels and environment."
  },
  {
    title: "Maintenance Plans",
    desc: "Regular solar cleaning packages to keep your panels performing efficiently throughout the year."
  },
  {
    title: "Before & After Performance Check",
    desc: "We evaluate your solar system performance before and after cleaning to show the improvement in efficiency."
  }
];

function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Our Solar Cleaning Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional solar panel cleaning solutions designed to improve
            efficiency, increase energy output, and extend the life of your
            solar panels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-600">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;