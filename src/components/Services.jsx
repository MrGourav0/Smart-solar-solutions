import React, { useState } from "react";
import Card from "./Card";

function Services() {
  const [activeTab, setActiveTab] = useState("residential");

  const solarPlans = {
    residential: [
      {
        title: "3KW / 4KW Residential",
        subtitle: "Perfect for homes",
        plans: [
          { label: "One Time Cleaning", price: 599 },
          { label: "6 Months Plan", price: 3999 },
          { label: "1 Year Unlimited", price: 7499 },
        ],
      },
      {
        title: "5KW / 6KW Residential",
        subtitle: "Medium households",
        plans: [
          { label: "One Time Cleaning", price: 649 },
          { label: "6 Months Plan", price: 4299 },
          { label: "1 Year Unlimited", price: 7999 },
        ],
      },
      {
        title: "7KW+ Large Residential",
        subtitle: "Big homes & villas",
        plans: [
          { label: "One Time Cleaning", price: 699 },
          { label: "6 Months Plan", price: 4599 },
          { label: "1 Year Unlimited", price: 8499 },
        ],
      },
    ],
    commercial: [
      {
        title: "10-20KW Commercial",
        subtitle: "Small businesses",
        plans: [
          { label: "One Time", price: 599 },
          { label: "6 Months", price: 3999 },
          { label: "Annual Contract", price: 7499 },
        ],
      },
      {
        title: "20-30KW Commercial",
        subtitle: "Medium factories",
        plans: [
          { label: "One Time", price: 649 },
          { label: "6 Months", price: 4299 },
          { label: "Annual Contract", price: 7999 },
        ],
      },
      {
        title: "30KW+ Industrial",
        subtitle: "Large plants",
        plans: [
          { label: "One Time", price: 699 },
          { label: "6 Months", price: 4599 },
          { label: "Annual Contract", price: 8499 },
        ],
      },
    ],
  };

  const tabs = [
    { id: "residential", label: " Residential Cleaning", count: 3 },
    { id: "commercial", label: " Commercial Cleaning", count: 3 },
    { id: "other", label: " Other Services", count: 2 },
  ];

  const otherServices = [
    {
      title: "Solar Panel Repair & Maintenance",
      desc: "Expert repairs, inverter checks, wiring inspections",
      price: "From ₹999",
      icon: "",
    },
    {
      title: "Performance Reports & Optimization",
      desc: "Monthly generation reports, efficiency audits",
      price: "Free with plans",
      icon: "",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-900 to-green-300 bg-clip-text text-transparent mb-6">
            Professional Solar Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Keep your solar panels at peak performance with our specialized
            cleaning, maintenance, and repair services tailored for residential
            and commercial systems.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === tab.id
                  ? "bg-green-500 text-white shadow-xl shadow-green-500/25 scale-105"
                  : "bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 text-gray-700"
              }`}
            >
              {tab.label}
              <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {activeTab === "other" ? (
            /* Other Services */
            <div className="grid md:grid-cols-2 gap-8">
              {otherServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl border border-green-100 hover:border-green-200 transition-all duration-500 hover:-translate-y-4"
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="text-2xl font-bold text-green-600">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Pricing Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solarPlans[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-green-100 hover:border-green-300 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    {item.title}
                  </div>
                  <p className="text-gray-500 italic mb-6">{item.subtitle}</p>

                  <div className="space-y-4 mb-8">
                    {item.plans.map((plan, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex justify-between items-center bg-white/70 backdrop-blur-sm p-4 rounded-2xl border hover:border-green-200 hover:bg-green-50 transition-all"
                      >
                        <span className="font-medium text-gray-700">
                          {plan.label}
                        </span>
                        <span className="text-2xl font-bold text-green-600">
                          ₹{plan.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-green-500 text-white py-4 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Get Quote
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 p-12 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-3xl border-2 border-green-200/50">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule your free solar panel assessment today and start saving!
          </p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
            Book Free Assessment →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
