function Benefits() {
  return (
    <div className="px-10 py-16 grid grid-cols-2 gap-10">
      <div className="bg-green-100 p-10 rounded-2xl">
        <h2 className="text-3xl text-gray-600 font-semibold mb-6">
          Go Solar. Save Big Live Green
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ High Efficiency Panels</li>
          <li>✔ Eco Friendly Materials</li>
          <li>✔ 25+ Years Warranty</li>
          <li>✔ Smart Monitoring</li>
        </ul>
      </div>

      <div className="bg-gray-200 p-10 rounded-2xl ">
        <h2 className="text-3xl text-green-600 font-semibold mb-6">
          {/* Maximize Your Solar Performance */}
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ Increase Efficiency & Power Generation</li>
          <li>✔ Safe & Professional Cleaning Methods</li>
          <li>✔ Prevent Long-Term Panel Damage</li>
          <li>✔ Quick Service with Guaranteed Results</li>
        </ul>
      </div>
    </div>
  );
}

export default Benefits;
