import Image from "next/image";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-[#C8A27A]">
      <div className="mx-auto flex h-26 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={90}
            height={50}
            className="h-auto w-auto"
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
            href="#contato"
            className="text-sm font-medium text-white transition-opacity hover:opacity-70"
          >
            Contato
          </a>

          <a
            href="#agendamento"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#9A7650] transition-all hover:bg-[#f5eee6]"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
