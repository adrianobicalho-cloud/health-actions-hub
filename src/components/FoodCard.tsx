import { useState } from "react";
import { CircleAlert, Droplets, RotateCcw } from "lucide-react";
import type { Food } from "@/data/foods";

export function FoodCard({ food }: { food: Food }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group text-left [perspective:1400px] cursor-pointer"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
    >
      <article
        className="relative min-h-[44rem] sm:min-h-[46rem] rounded-3xl [transform-style:preserve-3d] transition-transform duration-700"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Frente */}
        <div className="absolute inset-0 bg-card border border-border rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition flex flex-col [backface-visibility:hidden]">
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{ background: "color-mix(in oklab, var(--tomato) 18%, var(--background))" }}
          >
            <img
              src={food.imagem}
              alt={food.nome}
              loading="lazy"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-foreground/80">
              {food.categoria}
            </span>
            <span className="absolute bottom-3 right-3 text-3xl drop-shadow-lg">{food.emoji}</span>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div
                  className="text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--tomato)" }}
                >
                  {food.selo}
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mt-1">{food.nome}</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                Clique para virar
              </span>
            </div>
            <div className="mt-5">
              <div className="text-xs font-bold uppercase text-foreground/60">
                Defensores Agrícolas mais usados
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {food.agrotoxicos.map((a) => (
                  <span
                    key={a}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xs font-bold uppercase text-foreground/60">
                Riscos para a saúde
              </div>
              <ul className="mt-2 space-y-1.5">
                {food.riscos.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-foreground/80">
                    <CircleAlert className="w-4 h-4 mt-0.5 text-destructive shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Verso */}
        <div className="absolute inset-0 bg-card border border-border rounded-3xl overflow-hidden flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="p-6 flex-1 flex flex-col overflow-y-auto">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--leaf)]">
                  Verso do card
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mt-1">
                  {food.emoji} {food.nome}
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground inline-flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Clique para voltar
              </span>
            </div>
            <div className="mt-5">
              <div className="text-xs font-bold uppercase text-foreground/60 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-primary" /> Melhor método de limpeza
              </div>
              <div className="mt-1 text-sm font-bold text-foreground">{food.metodo_titulo}</div>
              <ol className="mt-3 space-y-2.5">
                {food.metodo_passos.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/80">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-5 rounded-2xl bg-accent/40 border border-accent p-4">
              <div className="text-xs font-bold uppercase text-accent-foreground">Importante</div>
              <p className="mt-1 text-sm text-foreground/80">{food.importante}</p>
            </div>
            <div className="mt-auto pt-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                Fonte do método
              </div>
              <p className="mt-1 text-xs text-foreground/60">{food.fonte}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
