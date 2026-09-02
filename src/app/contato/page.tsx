import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../../assets/banner.avif";

const CONTATOS = {
  endereco: "Av. das Flores, 120 - Centro, Caraguatatuba - SP",
  enderecoMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+das+Flores,+120+-+Centro,+Caraguatatuba+-+SP",
  telefone: "(12) 3456-7890",
  telefoneHref: "+551234567890",
  whatsapp: "(12) 98845-2176",
  whatsappHref: "5512988452176",
  email: "contato@entreellas.com.br",
};

function IconLocalizacao(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconTelefone(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm0 18.1c-1.65 0-3.19-.46-4.5-1.26l-.32-.19-3 .79.8-2.92-.21-.3A8.09 8.09 0 0 1 3.93 12c0-4.46 3.63-8.09 8.09-8.09 4.46 0 8.08 3.63 8.08 8.09 0 4.46-3.62 8.1-8.08 8.1Z" />
    </svg>
  );
}

function IconEmail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  );
}

function ContatoCard({ icon, titulo, valor, href, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center gap-4 rounded-2xl border border-[#944736]/10 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#944736]/20 hover:shadow-lg"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EBDD] text-[#944736] transition-colors duration-300 group-hover:bg-[#944736] group-hover:text-white">
        {icon}
      </span>

      <span className="font-button text-xs font-semibold uppercase tracking-[0.18em] text-[#944736]">
        {titulo}
      </span>

      <span className="text-sm leading-relaxed text-[#5A4636]/90">
        {valor}
      </span>
    </a>
  );
}

export default function ContatoPage() {
  return (
    <div>
      <Header />

      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden md:min-h-[520px]">
        <Image
          src={Banner}
          alt="Entre em contato"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center">
          <h1 className="mb-6 font-display text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            Entre em Contato
          </h1>

          <p className="max-w-lg font-sans text-base leading-relaxed text-white/90 md:text-lg">
            Fale com a gente por qualquer um dos canais abaixo. Será um
            prazer te atender.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContatoCard
              icon={<IconLocalizacao className="h-7 w-7" />}
              titulo="Visite-nos"
              valor={CONTATOS.endereco}
              href={CONTATOS.enderecoMapsUrl}
              external
            />

            <ContatoCard
              icon={<IconTelefone className="h-7 w-7" />}
              titulo="Ligue para nós"
              valor={CONTATOS.telefone}
              href={`tel:${CONTATOS.telefoneHref}`}
            />

            <ContatoCard
              icon={<IconWhatsapp className="h-7 w-7" />}
              titulo="WhatsApp"
              valor={CONTATOS.whatsapp}
              href={`https://wa.me/${CONTATOS.whatsappHref}`}
              external
            />

            <ContatoCard
              icon={<IconEmail className="h-7 w-7" />}
              titulo="E-mail"
              valor={CONTATOS.email}
              href={`mailto:${CONTATOS.email}`}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}