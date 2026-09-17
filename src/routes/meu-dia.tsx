import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Check, Flame, Plus, Sparkles, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { FOODS } from "@/data/foods";

export const Route = createFileRoute("/meu-dia")({
  head: () => ({
    meta: [
      { title: "Meu Dia — Saúde em Ação" },
      {
        name: "description",
        content:
          "Registre o que você comeu hoje e marque os cuidados que já pratica para reduzir a exposição a defensores agrícolas.",
      },
      { property: "og:title", content: "Meu Dia — Saúde em Ação" },
      {
        property: "og:description",
        content: "Um registro simples e diário dos seus alimentos e cuidados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MeuDia,
});

const CUIDADOS = [
  { id: "lavar", label: "Lavei bem frutas e verduras antes de comer", pontos: 10 },
  { id: "bicarbonato", label: "Usei solução de bicarbonato ou vinagre", pontos: 15 },
  { id: "casca", label: "Descasquei alimentos de casca fina", pontos: 10 },
  { id: "organico", label: "Escolhi algum alimento orgânico ou agroecológico", pontos: 20 },
  { id: "feira", label: "Comprei de feira, agricultura familiar ou horta própria", pontos: 15 },
  { id: "variei", label: "Variei os alimentos em vez de repetir sempre os mesmos", pontos: 10 },
  { id: "agua", label: "Bebi bastante água ao longo do dia", pontos: 10 },
  { id: "compartilhei", label: "Compartilhei o que aprendi com alguém", pontos: 20 },
];

const STORAGE_KEY = "saude-em-acao:meu-dia:v1";

type DiaState = {
  data: string;
  alimentos: string[];
  cuidados: string[];
  streak: number;
  ultimoDia: string | null;
};

function hoje() {
  return new Date().toISOString().slice(0, 10);
}

function ontem() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function inicial(): DiaState {
  return { data: hoje(), alimentos: [], cuidados: [], streak: 0, ultimoDia: null };
}

function MeuDia() {
  const [state, setState] = useState<DiaState>(inicial);
  const [carregado, setCarregado] = useState(false);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const salvo = JSON.parse(raw) as DiaState;
        if (salvo.data === hoje()) {
          setState(salvo);
        } else {
          setState({
            data: hoje(),
            alimentos: [],
            cuidados: [],
            streak: salvo.ultimoDia === ontem() ? salvo.streak : 0,
            ultimoDia: salvo.ultimoDia ?? null,
          });
        }
      }
    } catch {
      /* localStorage indisponível — segue com o estado inicial */
    }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (!carregado) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignora */
    }
  }, [state, carregado]);

  const pontos = useMemo(
    () =>
      CUIDADOS.filter((c) => state.cuidados.includes(c.id)).reduce((t, c) => t + c.pontos, 0) +
      state.alimentos.length * 5,
    [state],
  );

  const sugestoes = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return [];
    return FOODS.filter(
      (f) => f.nome.toLowerCase().includes(termo) && !state.alimentos.includes(f.nome),
    ).slice(0, 6);
  }, [busca, state.alimentos]);

  function toggleCuidado(id: string) {
    setState((s) => {
      const marcado = s.cuidados.includes(id);
      const cuidados = marcado ? s.cuidados.filter((c) => c !== id) : [...s.cuidados, id];
      const jaContou = s.ultimoDia === hoje();
      return {
        ...s,
        cuidados,
        streak: !jaContou && cuidados.length > 0 ? s.streak + 1 : s.streak,
        ultimoDia: cuidados.length > 0 ? hoje() : s.ultimoDia,
      };
    });
  }

  function addAlimento(nome: string) {
    setState((s) =>
      s.alimentos.includes(nome) ? s : { ...s, alimentos: [...s.alimentos, nome] },
    );
    setBusca("");
  }

  const alimentosDetalhe = state.alimentos
    .map((nome) => FOODS.find((f) => f.nome === nome))
    .filter((f): f is (typeof FOODS)[number] => Boolean(f));

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <CalendarCheck className="w-3.5 h-3.5" /> Meu dia
        </span>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-primary">
          Como está seu dia?
        </h1>
        <p className="mt-4 text-foreground/75">
          Registre o que você comeu e marque os cuidados que já pratica. Tudo fica salvo apenas no
          seu navegador — sem cadastro, sem cobrança.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-xs font-bold uppercase text-foreground/60">Pontos de hoje</div>
            <div className="mt-1 font-display text-4xl font-bold text-primary">{pontos}</div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-xs font-bold uppercase text-foreground/60">Alimentos</div>
            <div className="mt-1 font-display text-4xl font-bold text-foreground">
              {state.alimentos.length}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-xs font-bold uppercase text-foreground/60 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[var(--tomato)]" /> Dias seguidos
            </div>
            <div className="mt-1 font-display text-4xl font-bold text-foreground">
              {state.streak}
            </div>
          </div>
        </div>

        {/* Alimentos */}
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-primary">O que você comeu hoje?</h2>
          <p className="mt-1 text-sm text-foreground/70">
            Busque pelo nome do alimento e adicione à sua lista.
          </p>
          <div className="mt-4 relative">
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Ex.: morango, tomate, alface..."
              className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-ring"
            />
            {sugestoes.length > 0 && (
              <ul className="absolute z-20 mt-2 w-full rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                {sugestoes.map((f) => (
                  <li key={f.nome}>
                    <button
                      onClick={() => addAlimento(f.nome)}
                      className="w-full text-left px-4 py-3 text-sm font-semibold hover:bg-secondary flex items-center gap-2"
                    >
                      <span>{f.emoji}</span> {f.nome}
                      <Plus className="w-4 h-4 ml-auto text-primary" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {alimentosDetalhe.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {alimentosDetalhe.map((f) => (
                <li
                  key={f.nome}
                  className="rounded-2xl border border-border bg-background p-4 flex items-start gap-3"
                >
                  <span className="text-2xl">{f.emoji}</span>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{f.nome}</div>
                    <div className="text-xs font-bold uppercase" style={{ color: "var(--tomato)" }}>
                      {f.selo}
                    </div>
                    <p className="mt-1 text-sm text-foreground/70">{f.metodo_titulo}</p>
                  </div>
                  <button
                    onClick={() =>
                      setState((s) => ({
                        ...s,
                        alimentos: s.alimentos.filter((n) => n !== f.nome),
                      }))
                    }
                    aria-label={`Remover ${f.nome}`}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
                  >
                    <Trash2 className="w-4 h-4 text-foreground/60" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">
              Nenhum alimento registrado ainda hoje.
            </p>
          )}
        </div>

        {/* Cuidados */}
        <div className="mt-6 rounded-3xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-primary">O que você fez?</h2>
          <p className="mt-1 text-sm text-foreground/70">
            Cada cuidado reduz sua exposição aos defensores agrícolas.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {CUIDADOS.map((c) => {
              const feito = state.cuidados.includes(c.id);
              return (
                <li key={c.id}>
                  <button
                    onClick={() => toggleCuidado(c.id)}
                    className={`w-full text-left rounded-2xl border p-4 flex items-start gap-3 transition ${
                      feito
                        ? "border-primary bg-secondary/60"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        feito
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-card"
                      }`}
                    >
                      {feito && <Check className="w-3.5 h-3.5" />}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-foreground">{c.label}</span>
                    <span className="text-xs font-bold text-primary shrink-0">+{c.pontos}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-6 rounded-3xl border-2 border-primary/30 bg-secondary/50 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
          <Sparkles className="w-8 h-8 text-primary shrink-0" />
          <p className="flex-1 text-sm text-foreground/80">
            Quer saber como lavar cada alimento corretamente? Cada card tem o método recomendado no
            verso.
          </p>
          <Link
            to="/alimentos"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition"
          >
            Ver alimentos
          </Link>
        </div>
      </section>
    </Layout>
  );
}
