import "animate.css";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(null);
  const [subOpen, setSubOpen] = useState(null);

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
              className="cursor-pointer font-bold"
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
                  <p
                    className="font-bold cursor-pointer"
                    onClick={() => toggleSub("residential")}
                  >
                    Residential Solar Cleaning
                  </p>

                  {subOpen === "residential" && (
                    <div className="mt-2 space-y-2">

                      {/* 3/4 KW */}
                      <div>
                        <p>3KW / 4KW</p>
                        <p>One Time - ₹599</p>
                        <p>6 Month - ₹3999</p>
                        <p>1 Year - ₹7499</p>
                      </div>

                      {/* 5/6 KW */}
                      <div>
                        <p>5KW / 6KW</p>
                        <p>One Time - ₹649</p>
                        <p>6 Month - ₹4299</p>
                        <p>1 Year - ₹7999</p>
                      </div>

                      {/* 7/8 KW */}
                      <div>
                        <p>7KW / 8KW</p>
                        <p>One Time - ₹699</p>
                        <p>6 Month - ₹4599</p>
                        <p>1 Year - ₹8499</p>
                      </div>

                    </div>
                  )}
                </div>

                {/* Commercial */}
                <div className="p-3">
                  <p className="cursor-pointer font-bold" onClick={()=>toggleSub("Commercial")}>Commercial Solar Cleaning</p>
                  {subOpen==="commercial"&&(
                    <div>hello this is product</div>
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