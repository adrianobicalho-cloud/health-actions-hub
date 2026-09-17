import { createFileRoute } from "@tanstack/react-router";
import { Gamepad2, RotateCcw, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { QUIZ_ITEMS, type QuizItem } from "@/data/quiz";

export const Route = createFileRoute("/jogo")({
  head: () => ({
    meta: [
      { title: "Quiz Contaminado ou Seguro? — Saúde em Ação" },
      {
        name: "description",
        content:
          "Teste seus conhecimentos: descubra quais alimentos lideram os índices de contaminação por defensores agrícolas.",
      },
      { property: "og:title", content: "Quiz Contaminado ou Seguro? — Saúde em Ação" },
      {
        property: "og:description",
        content: "12 alimentos, uma escolha: contaminado ou seguro?",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Jogo,
});

function embaralhar(itens: QuizItem[]) {
  const a = [...itens];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function Jogo() {
  const [ordem, setOrdem] = useState<QuizItem[]>(QUIZ_ITEMS);
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [resposta, setResposta] = useState<boolean | null>(null);

  useEffect(() => {
    setOrdem(embaralhar(QUIZ_ITEMS));
  }, []);

  const item = ordem[indice];
  const terminou = indice >= ordem.length;

  function responder(escolha: boolean) {
    if (resposta !== null || !item) return;
    setResposta(escolha);
    if (escolha === item.contaminado) setAcertos((a) => a + 1);
  }

  function proximo() {
    setResposta(null);
    setIndice((i) => i + 1);
  }

  function reiniciar() {
    setOrdem(embaralhar(QUIZ_ITEMS));
    setIndice(0);
    setAcertos(0);
    setResposta(null);
  }

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Gamepad2 className="w-3.5 h-3.5" /> Jogo educativo
        </span>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-primary">
          Contaminado ou Seguro?
        </h1>
        <p className="mt-4 text-foreground/75">
          Olhe o alimento e decida: ele está entre os mais contaminados por defensores agrícolas
          segundo a Anvisa, ou entre os mais seguros?
        </p>

        {terminou ? (
          <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-center">
            <Trophy className="w-12 h-12 mx-auto text-[var(--sun)]" />
            <h2 className="mt-4 font-display text-3xl font-bold text-primary">
              {acertos} de {ordem.length} acertos
            </h2>
            <p className="mt-2 text-foreground/75">
              {acertos >= 10
                ? "Excelente! Você conhece muito bem o que vai no seu prato."
                : acertos >= 6
                  ? "Bom trabalho! Ainda dá para se surpreender com alguns alimentos."
                  : "Vale explorar a página de alimentos — tem muita informação nova por lá."}
            </p>
            <button
              onClick={reiniciar}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition"
            >
              <RotateCcw className="w-4 h-4" /> Jogar de novo
            </button>
          </div>
        ) : (
          item && (
            <div className="mt-10 rounded-3xl border border-border bg-card overflow-hidden">
              <div className="px-6 pt-6 flex items-center justify-between text-sm font-bold text-foreground/60">
                <span>
                  Rodada {indice + 1} de {ordem.length}
                </span>
                <span className="text-primary">{acertos} acertos</span>
              </div>
              <div className="mt-4 mx-6 aspect-[16/10] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-3xl font-bold text-foreground text-center">
                  {item.emoji} {item.nome}
                </h2>

                {resposta === null ? (
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => responder(true)}
                      className="rounded-2xl bg-destructive px-6 py-4 font-bold text-destructive-foreground hover:opacity-90 transition"
                    >
                      Contaminado
                    </button>
                    <button
                      onClick={() => responder(false)}
                      className="rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground hover:opacity-90 transition"
                    >
                      Seguro
                    </button>
                  </div>
                ) : (
                  <div className="mt-6">
                    <div
                      className={`rounded-2xl p-5 border-2 ${
                        resposta === item.contaminado
                          ? "border-primary bg-secondary/60"
                          : "border-destructive bg-destructive/10"
                      }`}
                    >
                      <div className="font-display text-xl font-bold text-foreground">
                        {resposta === item.contaminado ? "Acertou!" : "Não é isso…"}
                      </div>
                      <p className="mt-2 text-sm text-foreground/80">{item.fato}</p>
                    </div>
                    <button
                      onClick={proximo}
                      className="mt-4 w-full rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition"
                    >
                      {indice + 1 === ordem.length ? "Ver resultado" : "Próximo alimento"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </section>
    </Layout>
  );
}
