const stats = [
  { value: "500+", label: "Panels Cleaned" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Customer Satisfaction" },
];

function About() {
  return (
    <div id="about" className="bg-white">

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-6 leading-tight">
            Professional Solar Panel Cleaning Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Dust, dirt, and bird droppings can reduce solar panel efficiency by up to{" "}
            <strong className="text-green-700">30%</strong>. Our professional solar panel
            cleaning service ensures your panels stay clean, efficient, and produce maximum
            energy for your home or business.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We use eco-friendly cleaning techniques and specialized equipment to safely
            remove dirt without damaging your solar panels.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-green-50 border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">{s.value}</h3>
              <p className="text-gray-500 mt-2 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      </div>

      {/* ── Why Choose Us ── */}

    </div>
  );
}

export default About;
