import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Image from "next/image";
import Cliente from "../../assets/cliente.avif";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <section className="bg-[#F9F5F0] py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row">
          <div className="flex-1">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A27A]">
              Depoimento
            </span>

            <h2 className="mb-8 font-display text-4xl text-[#5A4636] md:text-5xl">
              Experiências que transformam
            </h2>

            <blockquote className="text-lg leading-relaxed text-[#5A4636]/90">
              “Conheci a EntreEllas por indicação de uma amiga e foi uma das
              melhores experiências que já tive em um espaço de estética. Desde
              o primeiro atendimento fui recebida com muito carinho, atenção e
              profissionalismo.
              <br />
              <br />
              O ambiente é acolhedor, elegante e transmite uma sensação de
              tranquilidade incrível. Os procedimentos foram realizados com
              muito cuidado, respeitando minhas necessidades e explicando cada
              etapa.
              <br />
              <br />
              Saí me sentindo mais bonita, confiante e valorizada. Hoje
              recomendo a EntreEllas para todas as mulheres que desejam cuidar
              da beleza e do bem-estar em um lugar onde realmente se sentem
              especiais.”
            </blockquote>

            <div className="mt-8">
              <p className="font-semibold text-[#5A4636]">Mariana Oliveira</p>

              <p className="text-sm text-[#5A4636]/70">
                Cliente da EntreEllas há 2 anos.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={Cliente}
                alt="Mariana Oliveira"
                width={450}
                height={550}
                className="h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
