import React from "react";

const plans = [
  {
    name: "3 Months Plan",
    price: "₹600",
    features: [
      "1 Cleaning per Month",
      "Basic Panel Inspection",
      "Eco-Friendly Cleaning",
      "Customer Support",
    ],
    highlight: false,
  },
  {
    name: "6 Months Plan",
    price: "₹1000",
    features: [
      "1 Cleaning per Month",
      "Complete Panel Inspection",
      "Efficiency Performance Check",
      "Priority Customer Support",
    ],
    highlight: true,
  },
  {
    name: "12 Months Plan",
    price: "₹1900",
    features: [
      "1 Cleaning per Month",
      "Full Solar Maintenance",
      "Performance Monitoring",
      "Priority Support + Discounts",
    ],
    highlight: false,
  },
];

function Booking() {
  return (
    <section id="booking" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Choose Your Cleaning Plan
          </h2>

          <p className="text-gray-600">
            Select the best solar panel cleaning plan to keep your panels
            efficient and dust-free all year.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md transition hover:shadow-xl ${
                plan.highlight
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>

              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-green-600 hover:bg-gray-200"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Booking;