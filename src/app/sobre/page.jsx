import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Sobre from "../../../assets/banner.avif";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      <Header />

      <div className="border-t border-[#944736]/30"></div>

      <section className="bg-[#F5EBDD]/70 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            Sobre nós
          </span>

          <h1 className="font-display text-5xl leading-tight text-[#944736] md:text-6xl">
            Beleza que conecta
            <br />
            pessoas e oportunidades
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5A4636]/80">
            A EntreEllas nasceu para aproximar profissionais da beleza de
            pessoas que buscam cuidado, qualidade e confiança em cada
            atendimento.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F0] py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row">
          <div className="flex-1">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
              Quem somos
            </span>

            <h2 className="mb-6 font-display text-4xl text-[#944736] md:text-5xl">
              Um espaço para profissionais crescerem
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-[#5A4636]/90">
              A EntreEllas é uma plataforma criada para conectar profissionais
              da área da beleza a clientes que procuram serviços de qualidade e
              atendimento personalizado.
            </p>

            <p className="mb-5 text-lg leading-relaxed text-[#5A4636]/90">
              Sabemos que por trás de cada procedimento existe uma profissional
              dedicada, com sua própria experiência, talento e forma de
              trabalhar. Por isso, valorizamos a individualidade de cada
              colaboradora e oferecemos um espaço para que seu trabalho tenha
              visibilidade.
            </p>

            <p className="text-lg leading-relaxed text-[#5A4636]/90">
              Nosso propósito é tornar essa conexão mais simples, transparente e
              acessível, criando oportunidades tanto para quem oferece seus
              serviços quanto para quem deseja cuidar de si.
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
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            Nossa proposta
          </span>

          <h2 className="font-display text-4xl text-[#944736] md:text-5xl">
            Mais do que beleza, conexão
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5A4636]/80">
            Criamos uma rede onde cada profissional pode apresentar seu trabalho
            e cada cliente pode encontrar o atendimento que combina com suas
            necessidades.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#F9F5F0] p-8 shadow-sm">
              <div className="mb-2 text-3xl text-[#944736]">✦</div>

              <h3 className="mb-3 font-display text-2xl text-[#944736]">
                Valorização
              </h3>

              <p className="leading-relaxed text-[#5A4636]/80">
                Damos visibilidade ao talento e à dedicação de cada profissional
                que faz parte da nossa rede.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9F5F0] p-8 shadow-sm">
              <div className="mb-2 text-3xl text-[#944736]">♡</div>

              <h3 className="mb-3 font-display text-2xl text-[#944736]">
                Confiança
              </h3>

              <p className="leading-relaxed text-[#5A4636]/80">
                Acreditamos em relações transparentes entre profissionais e
                clientes, construídas através de cuidado e respeito.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9F5F0] p-8 shadow-sm">
              <div className="mb-2 text-3xl text-[#944736]">✧</div>

              <h3 className="mb-3 font-display text-2xl text-[#944736]">
                Oportunidade
              </h3>

              <p className="leading-relaxed text-[#5A4636]/80">
                Criamos novas possibilidades para profissionais desenvolverem
                seu trabalho e alcançarem mais pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F0] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#b9634f]">
            Nossa rede
          </span>

          <h2 className="font-display text-4xl text-[#944736] md:text-5xl">
            Cada profissional tem sua história
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#5A4636]/80">
            Na EntreEllas, diferentes especialidades se encontram em um só
            lugar. Esteticistas, designers de sobrancelhas, profissionais de
            cílios e outras especialistas podem fazer parte da nossa rede,
            oferecendo seus serviços de forma independente e personalizada.
          </p>

          <div className="mt-10">
            <Link
              href="/profissionais"
              className="inline-block rounded-full bg-[#944736] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#803c2d]"
            >
              Conheça nossas profissionais
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
