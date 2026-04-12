import { useState } from "react";

const services = [
  {
    icon: "🏠",
    title: "Rooftop Solutions",
    bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Free solar consultation for residential & commercial connections",
      "Free site visit — roof height, direction, elevation, rooftop layout & design by solar experts",
      "Accurate kW requirement & 25-year return calculation",
      "Customized EMI & loan planning as per budget",
    
    
    ],
  },
  {
    icon: "🏭",
    title: "Industrial Solar Solutions",
     bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Complete consultation for factories, warehouses & industries",
      "Detailed load analysis & high-capacity system planning",
      "ROI calculation with long-term savings projection",
    
  
    ],
  },
  {
    icon: "🌱",
    title: "Ground Mounted Solutions",
    bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Site assessment for land suitability",
      "Ideal for large-scale projects, farms & commercial use",
      "Government approvals & documentation support",
      "Investment & return analysis for long-term projects",
      
    ],
  },
  {
    icon: "🧹",
    title: "Solar Cleaning",
     bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Professional cleaning using safe & effective methods",
      "Removes dust, bird droppings",
      "Improves panel efficiency & energy generation",
      "Scheduled maintenance plans available",
      "Suitable for residential, commercial & industrial setups",
    ],
  },
  {
    icon: "🔧",
    title: "Repair & Maintenance",
     bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Complete system health check & fault diagnosis",
      "Repair of panels, inverter & electrical components",
      "Performance optimization & efficiency improvement",
      "AMC (Annual Maintenance Contract) options available",
    ],
  },
  {
    icon: "📊",
    title: "Generation Reports",
    bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Detailed tracking of daily, monthly & yearly generation",
      "Comparison of expected vs actual output",
      "Savings & ROI tracking reports",
      "Useful for audits, monitoring & decision making",
    ],
  },
  {
    icon: "🛡️",
    title: "Solar Insurance",
    bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Coverage against natural disasters, theft & damage",
   
      "Customized plans as per project size",
      "Hassle-free claim support & documentation",
      
    ],
  },
  {
    icon: "💰",
    title: "Project Finance",
     bg: "linear-gradient(135deg, #166534, #16a34a)",
    items: [
      "Easy loan & EMI options for solar installation",
      "Tie-ups with banks Nationalised & NBFCs for quick approval",
      "Flexible repayment plans based on savings",
      "Guidance on subsidies & government benefits",
      "End-to-end support from application to disbursement",
    ],
  },
];

const stats = [
  { value: "500+", label: "Panels Cleaned" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Customer Satisfaction" },
];



function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? service.items : service.items.slice(0, 3);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Header */}
      <div
        className="px-4 py-4 flex items-center gap-3"
        style={{ background: service.bg }}
      >
        <span className="text-xl">{service.icon}</span>
        <h3 className="text-white font-bold text-sm leading-tight">{service.title}</h3>
      </div>

      {/* Items */}
      <ul className="px-4 pt-4 pb-2 space-y-2">
        {visible.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 text-lg leading-relaxed">
            <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="px-4 pb-4 pt-1 text-green-700 text-xs font-semibold hover:text-green-500 transition-colors block"
      >
        {expanded ? "Show less ↑" : `+${service.items.length - 3} more ↓`}
      </button>
    </div>
  );
}

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
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">{s.value}</h3>
              <p className="text-gray-500 mt-2 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      </div>

      {/* ── Services ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-4">
            Our Complete Solar Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From installation to maintenance, insurance to financing — we're your
            end-to-end solar partner.
          </p>
        </div>

        {/* Cards */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}

    </div>
  );
}

export default About;