import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

import Sobre from "../../../assets/banner.avif";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] font-[var(--font-montserrat)]">
      <Header />

      <div className="border-t border-[#944736]/30"></div>

      <section className="bg-[#F5EBDD]/70 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            Sobre nós
          </span>

          <h1 className="font-[var(--font-playfair)] text-5xl leading-tight text-[#944736] md:text-6xl">
            Pessoas, talentos
            <br />e novas conexões
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
            A EntreEllas é uma plataforma criada para aproximar profissionais da
            beleza de pessoas que procuram por serviços especializados.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F0] py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 md:flex-row">
          <div className="flex-1">
            <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
              Quem somos
            </span>

            <h2 className="mb-6 font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
              Um espaço para talentos ganharem visibilidade
            </h2>

            <p className="mb-5 font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/90">
              A EntreEllas nasceu a partir de uma ideia simples: existem
              profissionais talentosos na área da beleza que precisam de
              oportunidades para mostrar o que fazem.
            </p>

            <p className="mb-5 font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/90">
              Ao mesmo tempo, existem pessoas procurando por profissionais
              qualificados, mas que muitas vezes não sabem onde encontrá-los ou
              como conhecer melhor o trabalho de cada um.
            </p>

            <p className="font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/90">
              A nossa proposta é aproximar esses dois lados. Criamos um espaço
              onde profissionais podem divulgar suas especialidades e onde
              clientes podem descobrir novos talentos de maneira simples e
              acessível.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[1rem] shadow-2xl">
              <Image
                src={Sobre}
                alt="Profissional da área da beleza"
                width={600}
                height={650}
                className="h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EBDD] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
              Nosso propósito
            </span>

            <h2 className="font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
              Conectar quem oferece com quem procura
            </h2>

            <p className="mt-6 font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
              Acreditamos que encontrar um profissional não precisa ser
              complicado. E acreditamos que divulgar um trabalho também não
              deveria depender apenas de indicações ou das redes sociais.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#F9F5F0] p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#944736] font-[var(--font-montserrat)] text-xl text-white">
                ✦
              </div>

              <h3 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#944736]">
                Visibilidade
              </h3>

              <p className="font-[var(--font-montserrat)] leading-relaxed text-[#5A4636]/80">
                Damos espaço para profissionais apresentarem seu trabalho, suas
                especialidades e aquilo que as torna únicas.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9F5F0] p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#944736] font-[var(--font-montserrat)] text-xl text-white">
                ♡
              </div>

              <h3 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#944736]">
                Conexão
              </h3>

              <p className="font-[var(--font-montserrat)] leading-relaxed text-[#5A4636]/80">
                Facilitamos o encontro entre pessoas que procuram um serviço e
                profissionais que possuem a experiência para oferecê-lo.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9F5F0] p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#944736] font-[var(--font-montserrat)] text-xl text-white">
                ✧
              </div>

              <h3 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#944736]">
                Oportunidade
              </h3>

              <p className="font-[var(--font-montserrat)] leading-relaxed text-[#5A4636]/80">
                Criamos novas possibilidades para profissionais ampliarem sua
                presença e alcançarem pessoas interessadas em seus serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F0] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 block font-[var(--font-geist-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            Nossa visão
          </span>

          <h2 className="font-[var(--font-playfair)] text-4xl text-[#944736] md:text-5xl">
            Uma rede onde todos podem crescer
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
            Queremos construir uma rede cada vez maior de profissionais da
            beleza, permitindo que diferentes talentos encontrem espaço,
            visibilidade e novas oportunidades.
          </p>

          <p className="mx-auto mt-5 max-w-3xl font-[var(--font-montserrat)] text-lg leading-relaxed text-[#5A4636]/80">
            Para quem procura um serviço, queremos ser um ponto de descoberta.
            Para quem trabalha com beleza, queremos ser uma vitrine para seu
            talento.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
