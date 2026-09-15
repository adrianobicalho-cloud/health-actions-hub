import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bug,
  Flame,
  HeartPulse,
  Leaf,
  ShieldAlert,
  Sprout,
  Users,
} from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saúde em Ação — Defensores Agrícolas nos alimentos e a ODS 3" },
      {
        name: "description",
        content:
          "Projeto educativo sobre o impacto dos defensores agrícolas na saúde humana, alinhado à ODS 3 da ONU.",
      },
      { property: "og:title", content: "Saúde em Ação — Defensores Agrícolas e ODS 3" },
      {
        property: "og:description",
        content: "Conheça os riscos dos defensores agrícolas presentes nos alimentos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const STATS = [
  {
    valor: "1 em 5",
    texto:
      "amostras da Anvisa têm resíduos acima do permitido ou defensores agrícolas proibidos no país.",
  },
  {
    valor: "34.000",
    texto:
      "brasileiros intoxicados por defensores agrícolas a cada ano segundo o SUS — e estima-se 50× mais casos não notificados.",
  },
  {
    valor: "7 em 10",
    texto:
      "amostras de leite materno analisadas no PR/MT tinham resíduos de defensores agrícolas (UFMG/Fiocruz).",
  },
  {
    valor: "+20",
    texto:
      "defensores agrícolas usados no Brasil são proibidos na União Europeia por causarem câncer e mutações.",
  },
];

const PROBLEMA = [
  {
    valor: "Mais de 30%",
    texto: (
      <>
        dos defensores agrícolas usados no Brasil estão{" "}
        <strong>proibidos na União Europeia</strong>.
      </>
    ),
  },
  {
    valor: "20%",
    texto:
      "das amostras analisadas pela Anvisa apresentam resíduos acima do permitido ou de substâncias proibidas.",
  },
  {
    valor: "+540 mil t",
    texto: "de defensores agrícolas consumidos por ano no Brasil — campeão mundial.",
  },
  {
    valor: "34 mil",
    texto: "notificações anuais de intoxicação por defensores agrícolas no SUS.",
  },
];

const COMPROMISSO = [
  {
    icon: ShieldAlert,
    titulo: "Reconhecer o risco",
    texto:
      "Saber quais alimentos têm maior contaminação e quais defensores agrícolas estão envolvidos.",
  },
  {
    icon: HeartPulse,
    titulo: "Proteger a saúde",
    texto:
      "Reduzir a exposição com escolhas conscientes, lavagem correta e preferência por orgânicos.",
  },
  {
    icon: Users,
    titulo: "Agir coletivamente",
    texto: "Pressionar por políticas públicas e apoiar a agricultura familiar e agroecológica.",
  },
];

const IMPACTOS = [
  {
    titulo: "Câncer",
    texto:
      "O INCA reconhece os defensores agrícolas como fator de risco para leucemia, linfomas não-Hodgkin, câncer de próstata, mama, cérebro, pulmão, fígado e estômago. Crianças expostas têm até 7× mais risco de leucemia.",
  },
  {
    titulo: "Sistema nervoso",
    texto:
      "Organofosforados e carbamatos atacam o cérebro: estão ligados a Parkinson, Alzheimer precoce, depressão grave, ansiedade, suicídio e perda de memória em adultos. Em crianças, causam déficit cognitivo permanente.",
  },
  {
    titulo: "Gestação e bebês",
    texto:
      "Atravessam a placenta e contaminam o leite materno. Estão associados a abortos, malformações congênitas, microcefalia, autismo, puberdade precoce e infertilidade futura.",
  },
  {
    titulo: "Sistema hormonal",
    texto:
      "São desreguladores endócrinos: alteram tireoide, testosterona e estrógeno, causando infertilidade, obesidade, diabetes tipo 2 e doenças cardiovasculares mesmo em jovens.",
  },
  {
    titulo: "Fígado e rins",
    texto:
      "O corpo precisa metabolizar o veneno todos os dias. O resultado: hepatite tóxica, cirrose não-alcoólica e insuficiência renal crônica em pessoas cada vez mais jovens.",
  },
  {
    titulo: "Intoxicação aguda",
    texto:
      "Náusea, vômito, tontura, convulsão, parada respiratória e morte. O SUS registra 34 mil casos/ano — e a OMS estima que para cada notificação existam até 50 casos invisíveis.",
  },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--leaf)]/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[var(--sun)]/20 blur-3xl"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
            <Sprout className="w-3.5 h-3.5" /> ODS 3 · ONU
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-primary max-w-3xl mx-auto text-balance">
            O que está no seu prato pode estar adoecendo você.
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-2xl mx-auto">
            Os defensores agrícolas presentes nos alimentos são uma ameaça invisível à{" "}
            <strong>saúde e bem-estar</strong> de milhões de pessoas. O{" "}
            <strong className="text-primary">Saúde em Ação</strong> existe para mudar isso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/alimentos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition"
            >
              Ver alimentos contaminados <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/informe-se"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-bold text-primary hover:bg-primary/5 transition"
            >
              Informe-se!
            </Link>
          </div>
        </div>
      </section>

      {/* Meu Dia CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-secondary/60 to-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="text-6xl" aria-hidden>
            🌱
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl font-bold text-primary">Como está seu dia?</h2>
            <p className="mt-2 text-foreground/75">
              Registre o que você comeu, conheça cada alimento e marque os cuidados que já faz. Sem
              cobrança, no seu ritmo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <Link
              to="/meu-dia"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition"
            >
              Registrar meu dia
            </Link>
            <Link
              to="/alimentos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-bold text-primary hover:bg-primary/5 transition"
            >
              Ver alimentos
            </Link>
          </div>
        </div>
      </section>

      {/* Alerta vermelho */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-destructive">
          <Flame className="w-3.5 h-3.5" /> Alerta vermelho
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground max-w-3xl text-balance">
          Você está comendo veneno — e nem percebe.
        </h2>
        <p className="mt-4 text-foreground/75 max-w-2xl">
          O Brasil é o <strong>maior consumidor mundial de defensores agrícolas</strong>. Despejamos
          mais de <strong>540 mil toneladas por ano</strong> nas lavouras — e os resíduos chegam ao
          seu prato, à sua água e ao corpo do seu filho. Os efeitos são lentos, silenciosos e{" "}
          <strong>irreversíveis</strong>.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.valor} className="rounded-3xl border border-border bg-card p-6">
              <div className="font-display text-4xl font-bold text-destructive">{s.valor}</div>
              <p className="mt-2 text-sm text-foreground/75">{s.texto}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Fontes: Anvisa (PARA), INCA, Fiocruz, IDEC e Faculdade de Medicina da UFMG.
        </p>
      </section>

      {/* O problema */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
            <Bug className="w-3.5 h-3.5" /> O problema
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary max-w-3xl text-balance">
            Defensores Agrícolas: um veneno que chega à mesa.
          </h2>
          <p className="mt-4 text-foreground/75 max-w-2xl">
            O Brasil é um dos maiores consumidores mundiais de defensores agrícolas. A cada ano,
            mais de <strong>540 mil toneladas</strong> são despejadas nas lavouras — e parte
            significativa permanece nos alimentos que consumimos diariamente.
          </p>
          <p className="mt-3 text-foreground/75 max-w-2xl">
            Esses produtos químicos foram associados a intoxicações agudas, doenças crônicas,
            distúrbios hormonais, problemas neurológicos e diversos tipos de câncer, segundo o
            INCA, a Anvisa e o Ministério da Saúde.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROBLEMA.map((s) => (
              <div key={s.valor} className="rounded-3xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-primary">{s.valor}</div>
                <p className="mt-2 text-sm text-foreground/75">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS 3 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Leaf className="w-3.5 h-3.5" /> Nosso compromisso
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
          Alinhados à ODS 3 da ONU
        </h2>
        <p className="mt-4 text-foreground/75 max-w-2xl">
          "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades." É a
          partir dessa meta global que o <strong className="text-primary">Saúde em Ação</strong>{" "}
          nasceu — informar é o primeiro passo para transformar.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {COMPROMISSO.map((c) => (
            <div key={c.titulo} className="rounded-3xl border border-border bg-card p-6">
              <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{c.titulo}</h3>
              <p className="mt-2 text-sm text-foreground/75">{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impactos */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <span className="text-xs font-bold uppercase tracking-wider opacity-80">
            Impactos comprovados na sua saúde
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold max-w-3xl text-balance">
            O preço silencioso dos defensores agrícolas
          </h2>
          <p className="mt-4 opacity-85 max-w-2xl">
            A exposição contínua, mesmo em pequenas doses, é cumulativa. Os efeitos aparecem ao
            longo dos anos — e podem destruir vidas inteiras. Confira, com base em estudos do INCA,
            UFMG, Fiocruz e Ministério da Saúde, o que o veneno faz com o corpo humano:
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {IMPACTOS.map((i) => (
              <div
                key={i.titulo}
                className="rounded-3xl bg-primary-foreground/10 border border-primary-foreground/20 p-6"
              >
                <h3 className="font-display text-xl font-bold">{i.titulo}</h3>
                <p className="mt-2 text-sm opacity-85">{i.texto}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-destructive/90 p-6 md:p-8">
            <h3 className="font-display text-2xl font-bold">Não existe "dose segura"</h3>
            <p className="mt-2 opacity-90 max-w-3xl">
              Pesquisadores da Faculdade de Medicina da UFMG alertam: "os efeitos dos defensores
              agrícolas sobre a saúde humana só serão percebidos no <strong>futuro</strong>". Ou
              seja — o câncer, o Parkinson e a infertilidade que aparecerão daqui a 10, 20, 30 anos
              estão sendo plantados no prato de hoje.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/alimentos"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-bold text-primary hover:opacity-90 transition"
            >
              Ver os alimentos mais afetados <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/informe-se"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/60 px-6 py-3 font-bold hover:bg-primary-foreground/10 transition"
            >
              <BookOpen className="w-4 h-4" /> Leia as fontes científicas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
