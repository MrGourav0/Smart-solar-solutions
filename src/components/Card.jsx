function Card({ title, plans }) {
  return (
    <div className="bg-black/40 border border-green-500/20 
                    p-5 rounded-xl shadow-lg 
                    hover:shadow-green-500/20 
                    transition-all duration-300">

      {/* Title */}
      <h3 className="font-bold mb-3 text-green-400 text-lg">
        {title}
      </h3>

      {/* Plans */}
      <div className="space-y-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex justify-between items-center 
                       bg-white/5 px-3 py-2 rounded-md 
                       hover:bg-green-500/10 transition"
          >
            <span className="text-sm text-gray-200">
              {plan.label}
            </span>

            <span className="text-sm font-semibold text-green-400">
              ₹{plan.price}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Card;