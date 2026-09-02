import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

import { profissionais } from "./data";

export default function Home() {
  const profissionaisDestaque = profissionais.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F9F5F0] font-[var(--font-montserrat)]">
      <Header />

      <div className="border-t border-[#944736]/30"></div>

      <section className="bg-[#F5EBDD] py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-5 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            EntreEllas
          </span>

          <h1 className="font-[var(--font-playfair)] text-5xl leading-tight text-[#944736] md:text-7xl">
            Encontre quem entende
            <br />
            de beleza
          </h1>

          <p className="mx-auto mt-7 max-w-2xl font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
            Conectamos você a profissionais da área da beleza para que possa
            encontrar o serviço e o talento que combinam com o que procura.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Link
              href="/profissionais"
              className="flex-1 rounded-full bg-[#944736] px-7 py-4 font-[var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[#803c2d]"
            >
              Encontrar profissional
            </Link>

            <Link
              href="/cadastro"
              className="flex-1 rounded-full border border-[#944736] px-7 py-4 font-[var(--font-montserrat)] text-sm font-semibold text-[#944736] transition-all hover:bg-[#944736] hover:text-white"
            >
              Quero divulgar meu trabalho
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
              Encontre sua especialidade
            </span>

            <h2 className="font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
              O que você está procurando?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            <Link
              href="/profissionais?categoria=facial"
              className="group rounded-[1.5rem] bg-[#F5EBDD] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-4 block text-3xl text-[#944736]">✦</span>

              <h3 className="font-[var(--font-playfair)] text-xl text-[#944736]">
                Estética Facial
              </h3>

              <p className="mt-2 font-[var(--font-montserrat)] text-sm text-[#5A4636]/70">
                Cuidados e tratamentos para a pele
              </p>
            </Link>

            <Link
              href="/profissionais?categoria=corporal"
              className="group rounded-[1.5rem] bg-[#F5EBDD] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-4 block text-3xl text-[#944736]">♡</span>

              <h3 className="font-[var(--font-playfair)] text-xl text-[#944736]">
                Estética Corporal
              </h3>

              <p className="mt-2 font-[var(--font-montserrat)] text-sm text-[#5A4636]/70">
                Bem-estar e cuidados corporais
              </p>
            </Link>

            <Link
              href="/profissionais?categoria=sobrancelhas"
              className="group rounded-[1.5rem] bg-[#F5EBDD] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-4 block text-3xl text-[#944736]">✧</span>

              <h3 className="font-[var(--font-playfair)] text-xl text-[#944736]">
                Sobrancelhas
              </h3>

              <p className="mt-2 font-[var(--font-montserrat)] text-sm text-[#5A4636]/70">
                Design e cuidados especializados
              </p>
            </Link>

            <Link
              href="/profissionais?categoria=beleza"
              className="group rounded-[1.5rem] bg-[#F5EBDD] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-4 block text-3xl text-[#944736]">✿</span>

              <h3 className="font-[var(--font-playfair)] text-xl text-[#944736]">
                Beleza
              </h3>

              <p className="mt-2 font-[var(--font-montserrat)] text-sm text-[#5A4636]/70">
                Encontre outros especialistas
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EBDD] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
                Nossa rede
              </span>

              <h2 className="font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
                Conheça nossas profissionais
              </h2>

              <p className="mt-4 max-w-2xl font-[var(--font-montserrat)] text-lg text-[#5A4636]/80">
                Conheça profissionais de diferentes especialidades e encontre
                alguém que combine com o que você procura.
              </p>
            </div>

            <Link
              href="/profissionais"
              className="font-[var(--font-montserrat)] text-sm font-semibold text-[#944736] transition-opacity hover:opacity-70"
            >
              Ver todas →
            </Link>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {profissionaisDestaque.map((profissional) => (
              <Link
                key={profissional.id}
                href={`/profissionais/${profissional.id}`}
                className="group overflow-hidden rounded-[1.5rem] bg-[#F9F5F0] shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={profissional.imagem}
                    alt={profissional.nome}
                    width={280}
                    height={280}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="font-[var(--font-geist-sans)] text-xs font-semibold uppercase tracking-wider text-[#b9634f]">
                    {profissional.especialidade}
                  </span>

                  <h3 className="mt-2 font-[var(--font-playfair)] text-2xl text-[#944736]">
                    {profissional.nome}
                  </h3>

                  <p className="mt-3 line-clamp-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-[#5A4636]/70">
                    {profissional.descricao}
                  </p>

                  <span className="mt-5 block font-[var(--font-montserrat)] text-sm font-semibold text-[#944736]">
                    Ver perfil →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F0] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            Para profissionais
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
            Seu trabalho merece ser encontrado.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
            Crie seu espaço na EntreEllas, apresente sua especialidade e
            conecte-se com pessoas interessadas no seu trabalho.
          </p>
          <div className="mt-10">
            <Link
              href="/cadastro"
              className="inline-block rounded-full bg-[#944736] px-8 py-4 font-[var(--font-montserrat)] text-sm font-semibold text-white transition-all hover:bg-[#803c2d]"
            >
              Quero fazer parte
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EBDD]  py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            EntreEllas
          </span>

          <h2 className="font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
            Uma rede feita de talentos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
            Acreditamos que profissionais talentosos merecem espaço para mostrar
            seu trabalho e que encontrar alguém qualificado para um serviço de
            beleza deveria ser simples.
          </p>

          <Link
            href="/sobre"
            className="mt-8 inline-block font-[var(--font-montserrat)] text-sm font-semibold text-[#944736] transition-opacity hover:opacity-70"
          >
            Conheça a EntreEllas →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
