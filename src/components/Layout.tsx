import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Saúde em Ação" },
  { to: "/alimentos", label: "Alimentos" },
  { to: "/meu-dia", label: "Meu Dia" },
  { to: "/jogo", label: "Quiz" },
  { to: "/informe-se", label: "Informe-se!" },
  { to: "/criancas", label: "Área Kids" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Saúde em Ação" className="h-10 w-10 rounded-full object-cover" />
            <span className="leading-tight">
              <span className="block font-display font-bold text-primary">Saúde em Ação</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                ODS 3 · Alimentação consciente
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-full text-sm font-bold transition ${
                  pathname === item.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-bold ${
                  pathname === item.to ? "bg-primary text-primary-foreground" : "text-foreground/75"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Saúde em Ação" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display font-bold text-primary text-lg">Saúde em Ação</span>
            </div>
            <p className="mt-3 text-sm text-foreground/70">
              Projeto educativo alinhado à ODS 3 — Saúde e Bem-Estar — sobre os riscos dos
              defensores agrícolas nos alimentos.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/60">
              Navegue
            </h3>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm font-semibold text-foreground/75 hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/60">
              Inspirado em
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              Dados públicos de Anvisa, INCA, IDEC, Ministério da Saúde e UFMG. Conteúdo com fim
              educativo.
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--leaf)]" /> Feito por Alessandra Paixão e Lara
              Breda
            </p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © 2026 Saúde em Ação · Projeto educativo ODS 3
        </div>
      </footer>
    </div>
  );
}
