import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-[#F5EBDD]">
      <div className="mx-auto flex h-26 max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={250}
              height={150}
              className="h-auto w-auto cursor-pointer"
            />
          </Link>
        </div>

        <nav className="flex items-center gap-8">
          <Link
            href="/sobre"
            className="text-sm font-medium text-[#944736] transition-opacity hover:opacity-70"
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className="text-sm font-medium text-[#944736] transition-opacity hover:opacity-70"
          >
            Contato
          </Link>

          <Link
            href="/agendamento"
            className="rounded-full bg-[#944736] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#803c2d]"
          >
            Agendar
          </Link>
        </nav>
      </div>
    </header>
  );
}
