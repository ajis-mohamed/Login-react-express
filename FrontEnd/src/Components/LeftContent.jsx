import React from "react";
import logo from "../assets/logo-image.png";

const features = [
  {
    icon: "✦",
    title: "Premium Quality",
    description: "Thoughtfully selected pieces made for modern homes.",
  },
  {
    icon: "▣",
    title: "White-Glove Delivery",
    description: "Carefully packed and delivered right to your doorstep.",
  },
  {
    icon: "⌂",
    title: "Modern Homes",
    description: "Beautiful essentials that make every space feel special.",
  },
];

const LeftContent = () => {
  return (
    <section className="relative flex min-h-[500px] flex-1 flex-col justify-between overflow-hidden px-6 py-7 sm:px-10 sm:py-9 lg:min-h-screen lg:px-12 lg:py-10 xl:px-16 gap-4">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* ================= LOGO ================= */}

      <header className="relative z-10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-cover"/>
          <h1 className="font-serif text-2xl tracking-wide text-white sm:text-3xl">
            Elarza
            <span className="text-teal-300">.</span>
          </h1>
        </div>

        <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.3em] text-teal-200/70 sm:text-[8px]">
          Where elegance meets everyday
        </p>
      </header>

      {/* ================= HERO ================= */}

      <div className="relative z-10 my-12 max-w-2xl lg:my-0">

        {/* Badge */}

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(94,234,212,0.8)]" />

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/55 sm:text-[9px]">
            Curated for modern living
          </span>
        </div>

        {/* Heading */}

        <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl">
          Beautiful

          <span className="block italic text-white/85">
            Homes.
          </span>

          <span className="mt-1 block text-teal-100">
            Happier Lives.
          </span>
        </h2>

        {/* Description */}

        <p className="mt-6 max-w-xl text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
          Discover premium home décor and everyday essentials
          meticulously designed to make your personal sanctuary
          truly elevated, calm, and yours.
        </p>
      </div>

      {/* ================= FEATURES ================= */}

      <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border border-white/10
              bg-white/[0.045]
              p-3.5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-teal-200/20
              hover:bg-white/[0.08]
            "
          >

            {/* Glow */}

            <div className="
              absolute
              -right-8
              -top-8
              h-20
              w-20
              rounded-full
              bg-teal-300/10
              blur-2xl
              transition-all
              duration-500
              group-hover:bg-teal-300/20
            " />

            {/* Icon */}

            <div className="
              relative
              mb-3
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              border
              border-teal-200/10
              bg-teal-200/10
              text-xs
              text-teal-200
            ">
              {feature.icon}
            </div>

            <h3 className="relative text-[10px] font-semibold text-white/80 sm:text-[11px]">
              {feature.title}
            </h3>

            <p className="relative mt-1 text-[8px] leading-4 text-white/35 sm:text-[9px]">
              {feature.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default LeftContent;