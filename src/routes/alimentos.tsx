import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { FoodCard } from "@/components/FoodCard";
import { Layout } from "@/components/Layout";
import { FOODS } from "@/data/foods";

const CATEGORIAS = ["Todos", "Frutas", "Verduras", "Legumes", "Tubérculos", "Grãos", "Outros"];

export const Route = createFileRoute("/alimentos")({
  head: () => ({
    meta: [
      { title: "Alimentos — Saúde em Ação" },
      {
        name: "description",
        content:
          "58 alimentos brasileiros analisados a partir de dados da Anvisa (PARA 2024), IDEC, INCA e Greenpeace.",
      },
      { property: "og:title", content: "Alimentos — Saúde em Ação" },
      {
        property: "og:description",
        content: "O que tem no seu prato? Veja os alimentos com mais defensores agrícolas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Alimentos,
});

function Alimentos() {
  const [categoria, setCategoria] = useState("Todos");
  const filtrados = useMemo(
    () => (categoria === "Todos" ? FOODS : FOODS.filter((f) => f.categoria === categoria)),
    [categoria],
  );

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Search className="w-3.5 h-3.5" /> Alimentos sob investigação
        </span>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-primary">
          O que tem no seu prato?
        </h1>
        <p className="mt-4 text-foreground/75 max-w-2xl">
          <strong>{FOODS.length}</strong> alimentos brasileiros analisados a partir de dados da
          Anvisa (PARA 2024), IDEC, INCA, Greenpeace e reportagens de veículos como G1, O Globo, A
          Pública, Repórter Brasil e Metrópoles. Filtre por categoria para encontrar o que você
          procura.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIAS.map((c) => {
            const count = c === "Todos" ? FOODS.length : FOODS.filter((f) => f.categoria === c).length;
            const ativo = categoria === c;
            return (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  ativo
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground/70 hover:border-primary/50"
                }`}
              >
                {c} ({count})
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((food) => (
            <FoodCard key={food.nome} food={food} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
