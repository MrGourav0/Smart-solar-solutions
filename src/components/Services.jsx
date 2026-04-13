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
          { label: "1 Time Process", oldPrice: 599, price: 499 },
          { label: "6 Months Subscription", oldPrice: 3499, price: 2999 },
          { label: "1 Year Subscription", oldPrice: 7986, price: 7999 },
        ],
      },
      {
        title: "5KW / 6KW Residential",
        subtitle: "Medium households",
        plans: [
          { label: "1 Time Process", oldPrice: 649, price: 549 },
          { label: "6 Months Subscription", oldPrice: 3584, price: 3099 },
          { label: "1 Year Subscription", oldPrice: 8686, price: 7199 },
        ],
      },
      {
        title: "7KW / 10KW Residential",
        subtitle: "Big homes & villas",
        plans: [
          { label: "1 Time Process", oldPrice: 699, price: 599 },
          { label: "6 Months Subscription", oldPrice: 4193, price: 3199 },
          { label: "1 Year Subscription", oldPrice: 9386, price: 7399 },
        ],
      },
    ],
    commercial: [
      {
        title: "10-20KW  Commercial",
        subtitle: "Small businesses",
        plans: [
          { label: "1 Time Process", oldPrice: 799, price: 699 },
          { label: "6 Months Subscription", oldPrice: 4993, price: 3999 },
          { label: "1 Year Subscription", oldPrice: 9786, price: 7999 },
        ],
      },
      {
        title: "20-30KW Commercial",
        subtitle: "Medium factories",
        plans: [
          { label: "1 Time Process", oldPrice: 899, price: 799 },
          { label: "6 Months Subscription", oldPrice: 5593, price: 4299 },
          { label: "1 Year Subscription", oldPrice: 11166, price: 8499 },
        ],
      },
      {
        title: "30 - 50KW Commercial",
        subtitle: "Large plants",
        plans: [
          { label: "1 Time Process", oldPrice: 999, price: 899 },
          { label: "6 Months Subscription", oldPrice: 6293, price: 4599 },
          { label: "1 Year Subscription", oldPrice: 12566, price: 8999 },
        ],
      },
    ],
  };

  const tabs = [
    { id: "residential", label: " Residential Cleaning", },
    { id: "commercial", label: " Commercial Cleaning", },
    // { id: "other", label: " Other Services",  },
  // only 
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
                  ? "bg-gradient-to-r from-green-800 to-green-400 text-white shadow-xl shadow-green-500/25 scale-105"
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
                  <div className="text-2xl font-bold text-green-600 mb-4">
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
                        <span className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">
                            ₹{plan.oldPrice}
                          </span>
                          <span className="text-2xl font-bold text-green-600">
                            ₹{plan.price}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-800 to-green-400 text-white py-4 px-6 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Book Now 
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-20 p-12 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-3xl border-2 border-green-200/50">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule your free solar panel assessment today and start saving!
          </p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
            Book Free Assessment →
          </button>
        </div> */}
        
      </div>
    </section>
  );
}

export default Services;
