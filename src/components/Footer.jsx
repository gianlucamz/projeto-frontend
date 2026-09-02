import Image from "next/image";

import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#7A5543]/15 bg-[#F5EBDD]">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-10">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="EntreEllas"
            href="/"
            width={250}
            height={100}
            className="h-auto w-[360px] cursor-pointer"
          />
        </div>

        <nav className="flex items-center gap-8">
          <a
            href="#sobre"
            className="text-sm font-medium text-[#944736] transition-opacity hover:opacity-70"
          >
            Sobre
          </a>

          <a
            href="#servicos"
            className="text-sm font-medium text-[#944736] transition-opacity hover:opacity-70"
          >
            Serviços
          </a>

          <a
            href="/contato"
            className="text-sm font-medium text-[#944736] transition-opacity hover:opacity-70"
          >
            Contato
          </a>
        </nav>
      </div>

      <div className="border-t border-[#944736]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <p className="text-xs text-[#944736]/70">
            © 2026 EntreEllas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}