function Card({ title, plans }) {
  return (
    <div className="
      relative overflow-hidden
      bg-gradient-to-br from-[#0a0f0d] via-[#0f1a17] to-black
      border border-green-500/20
      p-6 rounded-2xl
      shadow-[0_0_20px_rgba(34,197,94,0.1)]
      hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
      hover:border-green-400/40
      transition-all duration-500
      group
    ">

      {/* Glow Effect */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10
        transition duration-500
      " />

      {/* Title */}
      <h3 className="
        font-semibold mb-4 text-green-400 text-xl
        tracking-wide
        group-hover:text-green-300 transition
      ">
        {title}
      </h3>

      {/* Plans */}
      <div className="space-y-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              flex justify-between items-center
              bg-white/5 backdrop-blur-md
              px-4 py-3 rounded-lg
              border border-transparent
              hover:border-green-500/30
              hover:bg-green-500/10
              transition-all duration-300
            "
          >
            <span className="text-sm text-gray-300">
              {plan.label}
            </span>

            <span className="
              text-sm font-semibold
              text-green-400
              group-hover:text-green-300
            ">
              ₹{plan.price}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Card;