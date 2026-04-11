function Benefits() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-7xl mx-auto">
      
      {/* Left Column - Go Solar */}
      <div className="bg-green-100 p-6 sm:p-8 lg:p-10 rounded-2xl order-2 lg:order-1">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl text-gray-600 font-semibold mb-6 leading-tight">
          Go Solar. Save Big Live Green
        </h2>
        <ul className="space-y-3 text-base sm:text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>High Efficiency Panels</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>Eco Friendly Materials</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>25+ Years Warranty</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>Smart Monitoring</span>
          </li>
        </ul>
      </div>

      {/* Right Column - Maximize Performance */}
      <div className="bg-gray-200 p-6 sm:p-8 lg:p-10 rounded-2xl order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl text-green-600 font-semibold mb-6 leading-tight">
          Maximize Your Solar Performance
        </h2>
        <ul className="space-y-3 text-base sm:text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>Increase Efficiency & Power Generation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>Safe & Professional Cleaning Methods</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>Prevent Long-Term Panel Damage</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✔</span>
            <span>Quick Service with Guaranteed Results</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Benefits;

