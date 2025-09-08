export default function ConsultoriaMarangoniSite() {
  const phoneWhats = "+5511971335199";
  const email = "consultoriamarangoni1@gmail.com";

  // Scroll suave para as seções sem trocar de página (evita 404 em hospedagem estática)
  const scrollToId = (e: any, id: string) => {
    e?.preventDefault?.();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch {}
    }
  };

  const services = [
    {
      key: "doc",
      title: "Documentação",
      short: "Adequação e tradução de dossiês conforme normas da Anvisa.",
      long: "Realizamos uma checagem técnica completa dos documentos exigidos para cada categoria de produto (cosméticos, alimentos, saneantes, dispositivos médicos, etc.). Adequamos formato, traduções e referências normativas para reduzir exigências e retrabalho.",
    },
    {
      key: "registro",
      title: "Registro & Protocolo",
      short: "Submissão completa e gestão dos trâmites oficiais.",
      long: "Cadastramos processos, preenchemos formulários, protocolamos e acompanhamos as interações na plataforma oficial, mantendo você informado sobre cada etapa até a decisão.",
    },
    {
      key: "monitoramento",
      title: "Monitoramento",
      short: "Acompanhamos cada etapa para evitar atrasos e exigências.",
      long: "Nada de ficar no escuro: monitoramos prazos, alertas e comunicados, antecipamos pendências e alinhamos respostas técnicas para minimizar atrasos e custos.",
    },
    {
      key: "idiomas",
      title: "Suporte Multilíngue (PT/EN/ZH)",
      short: "Comunicação fluida com fornecedores e equipes internacionais.",
      long: "Atendimento em português, inglês e chinês simplificado para agilizar trocas com fabricantes estrangeiros, alinhando especificações técnicas e documentais.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#79a3cc] via-[#8cb0d4] to-white text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#22314f] text-white grid place-items-center font-bold">CM</div>
            <div className="leading-tight">
              <div className="font-semibold text-[#22314f]">Consultoria Marangoni</div>
              <div className="text-xs text-slate-600">Consultoria Regulatória</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" onClick={(e) => scrollToId(e, 'home')} className="hover:text-[#22314f]">Home</a>
            <a href="#" onClick={(e) => scrollToId(e, 'servicos')} className="hover:text-[#22314f]">Serviços</a>
            <a href="#" onClick={(e) => scrollToId(e, 'sobre')} className="hover:text-[#22314f]">Sobre Nós</a>
            <a href="#" onClick={(e) => scrollToId(e, 'contato')} className="hover:text-[#22314f]">Contato</a>
          </nav>
          <a
            href={`https://wa.me/${phoneWhats}`}
            target="_blank"
            className="hidden md:inline-block rounded-2xl bg-[#22314f] text-white px-4 py-2 text-sm shadow"
          >
            Fale com um especialista
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#22314f] leading-tight">
              Regularização de Produtos na Anvisa <span className="block">sem dor de cabeça</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Nós cuidamos de todo o processo burocrático — você foca em importar, distribuir e vender com segurança.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${phoneWhats}`}
                target="_blank"
                className="rounded-2xl bg-[#22314f] text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-95"
              >
                Fale com um especialista agora
              </a>
              <a href="#" onClick={(e) => scrollToId(e, 'servicos')} className="rounded-2xl border border-[#22314f] text-[#22314f] px-5 py-3 text-sm font-semibold bg-white/70 backdrop-blur">
                Ver serviços
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-600">
              Atendimento multilíngue: PT / EN / ZH (Chinês)
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="bg-white/60 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/40">
              <div className="text-sm text-slate-600">Prova social</div>
              <div className="mt-2 text-2xl font-bold text-[#22314f]">+500 produtos regularizados</div>
              <p className="mt-2 text-slate-700">Atuação em diversas áreas reguladas pela Anvisa.</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-600">
                <div className="rounded-xl bg-white p-3 shadow">Cosméticos</div>
                <div className="rounded-xl bg-white p-3 shadow">Saneantes</div>
                <div className="rounded-xl bg-white p-3 shadow">Alimentos</div>
                <div className="rounded-xl bg-white p-3 shadow">Dispositivos</div>
                <div className="rounded-xl bg-white p-3 shadow">Suplementos</div>
                <div className="rounded-xl bg-white p-3 shadow">Outros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos */}
      <section className="bg-white scroll-mt-24" id="problemas">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#22314f]">Problemas que resolvemos</h2>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Minimizamos os processos burocráticos, com análise técnica por profissionais qualificados, reduzindo ao máximo exigências e retrabalhos pelos órgãos públicos.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              "Produtos barrados na alfândega",
              "Multas e prejuízos por não conformidade",
              "Prazos longos e falta de informação",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="font-semibold text-slate-800">{t}</div>
                <div className="mt-2 text-sm text-slate-600">Resolvemos a burocracia e mantemos você no controle do processo.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#22314f]">Benefícios</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
            Redução de custos financeiros e de prazos processuais, com segurança regulatória em cada etapa.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["Agilidade", "Segurança", "Previsibilidade", "Economia"].map((b) => (
              <div key={b} className="rounded-2xl bg-white/70 backdrop-blur p-5 border border-white shadow">
                <div className="font-semibold text-slate-800">{b}</div>
                <div className="mt-2 text-sm text-slate-600">Resultados práticos e mensuráveis.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#22314f]">Serviços</h2>
          <p className="mt-3 text-slate-700">Palavra‑chave • breve descrição • <span className="font-semibold">Saiba mais</span></p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <details key={s.key} className="group rounded-3xl border border-slate-200 p-6 shadow-sm bg-slate-50 open:bg-white">
                <summary className="list-none flex items-start justify-between cursor-pointer">
                  <div>
                    <h3 className="text-lg font-semibold text-[#22314f]">{s.title}</h3>
                    <p className="text-slate-700 mt-1">{s.short}</p>
                  </div>
                  <span className="ml-4 mt-1 rounded-full w-8 h-8 grid place-items-center border border-slate-300 text-slate-600">
                    <span className="transition group-open:rotate-45 text-xl leading-none">+</span>
                  </span>
                </summary>
                <div className="mt-4 text-sm text-slate-700">{s.long}</div>
                <a href="#" onClick={(e) => scrollToId(e, 'contato')} className="inline-block mt-4 text-sm font-semibold text-[#22314f] underline decoration-2 underline-offset-4">Saiba mais</a>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#22314f]">Passo a passo simples</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Contato inicial", d: "Coletamos as informações pertinentes para entender seu caso." },
              { t: "Relação de documentos", d: "Enviamos a lista completa e orientamos os requisitos por categoria." },
              { t: "Protocolização do processo", d: "Executamos o protocolo e acompanhamos até a decisão final." },
            ].map((step, i) => (
              <div key={step.t} className="relative rounded-3xl bg-white/80 border border-white shadow p-6">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-2xl bg-[#22314f] text-white grid place-items-center font-bold shadow">{i + 1}</div>
                <div className="font-semibold text-slate-800">{step.t}</div>
                <div className="mt-2 text-sm text-slate-600">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#22314f]">Sobre Nós</h2>
            <p className="mt-4 text-slate-700">
              A <span className="font-semibold">Consultoria Marangoni</span> nasceu para simplificar fluxos regulatórios no Brasil. Atuamos com rigor técnico e clareza para que importadores e distribuidores lancem seus produtos com segurança e eficiência.
            </p>
            <p className="mt-3 text-slate-700">Responsável: <span className="font-semibold">Marina Marangoni</span></p>
          </div>
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
            <div className="text-sm text-slate-600">Autoridade</div>
            <div className="mt-2 text-xl font-bold text-[#22314f]">+500 produtos regularizados</div>
            <p className="mt-2 text-slate-700">Atuação em diversas áreas reguladas pela Anvisa.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#22314f]">Contato</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white/80 border border-white shadow p-6">
              <div className="grid gap-4">
                <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Nome" />
                <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Empresa" />
                <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="WhatsApp" />
                <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Produto a regularizar" />
              </div>
              <div className="mt-5 flex gap-3">
                <button className="rounded-2xl bg-[#22314f] text-white px-5 py-3 text-sm font-semibold shadow">Solicitar consultoria gratuita</button>
                <a href={`mailto:${email}`} className="rounded-2xl border border-[#22314f] text-[#22314f] px-5 py-3 text-sm font-semibold bg-white">Enviar e-mail</a>
              </div>
            </form>
            <div className="rounded-3xl bg-white/70 border border-white shadow p-6">
              <div className="text-sm text-slate-600">Fale direto</div>
              <div className="mt-2 space-y-2">
                <a href={`https://wa.me/${phoneWhats}`} target="_blank" className="block font-semibold text-[#22314f] underline">WhatsApp: +55 (11) 97133-5199</a>
                <a href={`mailto:${email}`} className="block font-semibold text-[#22314f] underline">Email: {email}</a>
              </div>
              <p className="mt-4 text-sm text-slate-600">Tempo médio de resposta: em horário comercial.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#22314f] text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Consultoria Marangoni. Todos os direitos reservados.</div>
          <div className="text-sm opacity-80">CNPJ e endereço (opcional) • PT / EN / ZH</div>
        </div>
      </footer>
    </div>
  );
}
