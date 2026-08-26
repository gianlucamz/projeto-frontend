import Image from "next/image";

import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#C8A27A]">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="EntreEllas"
              width={300}
              height={240}
              className="h-60 w-auto object-contain"
            />
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Sobre
            </a>

            <a
              href="#servicos"
              className="text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Serviços
            </a>

            <a
              href="#contato"
              className="text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Contato
            </a>
          </nav>
        </div>

        <div className="my-5 h-px w-full bg-white/25" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/75 md:flex-row">
          <p>© 2026 EntreEllas. Todos os direitos reservados.</p>

          <p>Beleza que valoriza você.</p>
        </div>
      </div>
    </footer>
  );
}
