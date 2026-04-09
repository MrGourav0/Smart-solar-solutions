import "animate.css";
import { useState } from "react";
import Card from './Card'

function Hero() {
  const [open, setOpen] = useState(null);
  const [subOpen, setSubOpen] = useState(null);
  const solarPlans = {
  residential: [
    {
      title: "3KW / 4KW",
      plans: [
        { label: "One Time", price: 599 },
        { label: "6 Month", price: 3999 },
        { label: "1 Year", price: 7499 },
      ],
    },
    {
      title: "5KW / 6KW",
      plans: [
        { label: "One Time", price: 649 },
        { label: "6 Month", price: 4299 },
        { label: "1 Year", price: 7999 },
      ],
    },
    {
      title: "7KW / 8KW",
      plans: [
        { label: "One Time", price: 699 },
        { label: "6 Month", price: 4599 },
        { label: "1 Year", price: 8499 },
      ],
    },
  ],
  commercial:[
     {
      title: "10KW / 20KW",
      plans: [
        { label: "One Time", price: 599 },
        { label: "6 Month", price: 3999 },
        { label: "1 Year", price: 7499 },
      ],
    },
    {
      title: "20KW / 30KW",
      plans: [
        { label: "One Time", price: 649 },
        { label: "6 Month", price: 4299 },
        { label: "1 Year", price: 7999 },
      ],
    },
    {
      title: "30KW / 40KW",
      plans: [
        { label: "One Time", price: 699 },
        { label: "6 Month", price: 4599 },
        { label: "1 Year", price: 8499 },
      ],
    },

  ]
};

  const toggle = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  const toggleSub = (menu) => {
    setSubOpen(subOpen === menu ? null : menu);
  };

  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/solar.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content */}
      <div className="relative text-center text-white">
        <div className="flex items-center justify-center gap-10">

          {/* Solar Solutions */}
          <div>
            <h2
              className="cursor-pointer font-bold  "
              onClick={() => toggle("solar")}
            >
              Solar Solutions
            </h2>

            {open === "solar" && (
              <div className="p-3 mt-2">
                <p>Rooftop Solutions</p>
                <p>Industrial Solar Solutions</p>
                <p>Ground Mounted Solutions</p>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h2
              className="cursor-pointer font-bold"
              onClick={() => toggle("services")}
            >
              Services
            </h2>

            {open === "services" && (
              <div className="mt-2 space-y-3">

              
                {/* Residential */}
<div className="p-3">
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => toggleSub("residential")}
  >
    <span
      className={`transition-transform ${
        subOpen === "residential" ? "rotate-90" : ""
      }`}
    >
      ▶
    </span>
    <p className="font-bold">Residential Solar Cleaning</p>
  </div>

  {subOpen === "residential" && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
      {solarPlans.residential.map((item, index) => (
        <Card key={index} title={item.title} plans={item.plans} />
      ))}
    </div>
  )}
</div>
               {/* Commercial */}
<div className="p-3">
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => toggleSub("commercial")}
  >
    <span
      className={`transition-transform ${
        subOpen === "commercial" ? "rotate-90" : ""
      }`}
    >
      ▶
    </span>
    <p className="font-bold">Commercial Solar Cleaning</p>
  </div>

  {subOpen === "commercial" && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
      {solarPlans.commercial.map((item, index) => (
        <Card key={index} title={item.title} plans={item.plans} />
      ))}
    </div>
  )}
</div>
                {/* Other Services */}
                <div className="p-3">
                  <p>Solar Repair & Maintenance</p>
                  <p>Solar Generation Report</p>
                </div>

              </div>
            )}
          </div>

          {/* Insurance */}
          <div>
            <h2
              className="cursor-pointer font-bold"
              onClick={() => toggle("insurance")}
            >
              Insurance & Finance
            </h2>

            {open === "insurance" && (
              <div className="p-3 mt-2">
                <p>Solar Insurance</p>
                <p>Solar Project Finance</p>
              </div>
            )}
          </div>

        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6268314390?text=Hello%20I%20want%20solar%20panel%20cleaning%20service"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 p-2 w-12 rounded-full bg-green-400 animate__animated animate__heartBeat animate__infinite"
        >
          <i className="ri-whatsapp-line text-white text-3xl"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;