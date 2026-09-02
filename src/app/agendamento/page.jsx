"use client";

import Link from "next/link";

import { useState } from "react";

export default function AgendamentoPage() {
  const [agendado, setAgendado] = useState(false);

  function handleSubmit() {
    event.preventDefault();

    setAgendado(true);
  }

  if (agendado) {
    return (
      <main className="flex min-h-[calc(110vh-100px)] items-center justify-center bg-[#F5EBDD] px-6">
        <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-lg">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#944736] text-2xl text-white">
            ✓
          </div>

          <h1 className="mb-4 text-3xl font-medium text-[#944736]">
            Agendamento realizado!
          </h1>

          <p className="mb-8 leading-relaxed text-[#944736]/70">
            Seu horário foi solicitado com sucesso. Em breve entraremos em
            contato para confirmar o agendamento.
          </p>

          <Link
            href="/"
            className="inline-block rounded-full bg-[#944736] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#803c2d]"
          >
            Voltar para o início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5EBDD] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#944736]">
            EntreEllas
          </span>

          <h1 className="mt-3 text-4xl font-medium tracking-tight text-[#944736] md:text-5xl">
            Agende seu horário
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#944736]/70">
            Preencha os dados abaixo para solicitar seu atendimento. Escolha o
            procedimento, a data e o horário que deseja.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-lg md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                required
                className="w-full rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                Telefone
              </label>

              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(12) 99999-9999"
                required
                className="w-full rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@email.com"
                required
                className="w-full rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              />
            </div>

            <div>
              <label
                htmlFor="procedimento"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                Procedimento
              </label>

              <select
                id="procedimento"
                name="procedimento"
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              >
                <option value="" disabled>
                  Selecione um procedimento
                </option>

                <option value="limpeza-de-pele">Limpeza de pele</option>

                <option value="design-de-sobrancelhas">
                  Design de sobrancelhas
                </option>

                <option value="extensao-de-cilios">Extensão de cílios</option>

                <option value="depilacao">Depilação</option>

                <option value="massagem">Massagem</option>

                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="data"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                Data desejada
              </label>

              <input
                id="data"
                name="data"
                type="date"
                required
                className="w-full rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              />
            </div>

            <div>
              <label
                htmlFor="horario"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                Horário desejado
              </label>

              <select
                id="horario"
                name="horario"
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              >
                <option value="" disabled>
                  Selecione um horário
                </option>

                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="observacoes"
                className="mb-2 block text-sm font-medium text-[#944736]"
              >
                Observações
              </label>

              <textarea
                id="observacoes"
                name="observacoes"
                rows={4}
                placeholder="Alguma informação que gostaria de nos informar?"
                className="w-full resize-none rounded-lg border border-[#944736]/20 bg-[#FDFBF8] px-4 py-3 text-sm text-[#944736] outline-none transition focus:border-[#944736] focus:ring-1 focus:ring-[#944736]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#944736] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:bg-[#803c2d]"
          >
            Confirmar agendamento
          </button>

          <p className="mt-4 text-center text-xs text-[#7A5543]/80">
            O agendamento será confirmado após o contato da nossa equipe.
          </p>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[#7A5543] transition-opacity hover:opacity-60"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
