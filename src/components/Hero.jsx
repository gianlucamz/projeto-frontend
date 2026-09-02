import Image from "next/image";
import Link from "next/link"
import Banner from "../../assets/banner.avif";

export default function Hero() {
  return (
    <section className="relative flex min-h-[650px] items-center justify-end overflow-hidden">
      <Image
        src={Banner}
        alt="Serviços de estética"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80" />

      <div className="relative z-10 mr-8 flex max-w-xl flex-col items-end px-6 text-right md:mr-20">
        <h1 className="mb-6 font-display text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
          Realce a sua beleza
        </h1>

        <p className="mb-8 max-w-lg font-sans text-lg leading-relaxed text-white/90 md:text-xl">
          Cuidados personalizados para você se sentir ainda mais confiante,
          bonita e especial.
        </p>

        <Link
          href="/agendamento"
          className="rounded-full bg-[#944736] px-9 py-4 font-button text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#803c2d]"
        >
          Agendar horário
        </Link>
      </div>
    </section>
  );
}
