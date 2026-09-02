import Image from "next/image";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-[#F5EBDD]">
      <div className="mx-auto flex h-26 max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            href="/"
            width={250}
            height={150}
            className="h-auto w-auto cursor-pointer"
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
            href="#contato"
            className="text-sm font-medium text-[#944736] transition-opacity hover:opacity-70"
          >
            Contato
          </a>

          <a
            href="/agendamento"
            className="rounded-full bg-[#944736] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#803c2d]"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
