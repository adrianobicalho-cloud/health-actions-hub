export interface Food {
  categoria: string;
  emoji: string;
  nome: string;
  selo: string;
  imagem: string;
  agrotoxicos: string[];
  riscos: string[];
  metodo_titulo: string;
  metodo_passos: string[];
  importante: string;
  fonte: string;
}

export const FOODS: Food[] = [
  {
    "categoria": "Frutas",
    "emoji": "🍓",
    "nome": "Morango",
    "selo": "Campeão de contaminação",
    "imagem": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Carbendazim",
      "Clorpirifós",
      "Captana",
      "Procimidona"
    ],
    "riscos": [
      "Distúrbios hormonais e endócrinos",
      "Suspeita de carcinogenicidade",
      "Toxicidade neurológica"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍇",
    "nome": "Uva",
    "selo": "Múltiplas aplicações",
    "imagem": "https://loremflickr.com/800/600/grape,fruit,bunch?lock=11",
    "agrotoxicos": [
      "Tiametoxam",
      "Procimidona",
      "Captana"
    ],
    "riscos": [
      "Provável carcinógeno humano",
      "Distúrbios hormonais",
      "Toxicidade hepática"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍊",
    "nome": "Laranja",
    "selo": "Topo da lista Anvisa 2024",
    "imagem": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Imidacloprido",
      "Tiametoxam",
      "Acefato",
      "Carbendazim"
    ],
    "riscos": [
      "Risco ao desenvolvimento infantil",
      "Toxicidade neurológica",
      "Resíduos passam para o suco"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍍",
    "nome": "Abacaxi",
    "selo": "Topo da contaminação (O Globo)",
    "imagem": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Diuron",
      "Bromacila",
      "Etoprofós"
    ],
    "riscos": [
      "Contamina águas subterrâneas",
      "Disrupção endócrina",
      "Toxicidade aguda"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍎",
    "nome": "Maçã",
    "selo": "Aplicações repetidas",
    "imagem": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Captana",
      "Tiabendazol",
      "Carbendazim"
    ],
    "riscos": [
      "Suspeita de carcinogenicidade",
      "Disrupção endócrina",
      "Resíduos na casca"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍌",
    "nome": "Banana",
    "selo": "Pulverização aérea",
    "imagem": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Clorotalonil",
      "Tiabendazol",
      "Imazalil"
    ],
    "riscos": [
      "Toxicidade respiratória",
      "Suspeita de câncer",
      "Risco aos trabalhadores rurais"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🥭",
    "nome": "Manga",
    "selo": "Resíduos acima do limite",
    "imagem": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Carbendazim",
      "Tebuconazol",
      "Imidacloprido"
    ],
    "riscos": [
      "Disrupção endócrina",
      "Toxicidade reprodutiva",
      "Neurotoxicidade"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🥑",
    "nome": "Abacate",
    "selo": "Acumula resíduos na polpa",
    "imagem": "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Difenoconazol",
      "Abamectina",
      "Clorpirifós"
    ],
    "riscos": [
      "Toxicidade hepática",
      "Efeitos neurológicos",
      "Risco gestacional"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍈",
    "nome": "Melão",
    "selo": "Cultivo intensivo no NE",
    "imagem": "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Acefato",
      "Metomil",
      "Imidacloprido"
    ],
    "riscos": [
      "Intoxicação aguda",
      "Neurotoxicidade",
      "Toxicidade imunológica"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍉",
    "nome": "Melancia",
    "selo": "Alta carga de água",
    "imagem": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Mancozebe",
      "Clorpirifós",
      "Lambda-cialotrina"
    ],
    "riscos": [
      "Disrupção tireoidiana",
      "Neurotoxicidade",
      "Possível carcinógeno"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍐",
    "nome": "Pera",
    "selo": "Alta detecção (PARA)",
    "imagem": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Carbendazim",
      "Tebuconazol",
      "Imidacloprido"
    ],
    "riscos": [
      "Suspeita de carcinogenicidade",
      "Disrupção endócrina",
      "Toxicidade reprodutiva"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍑",
    "nome": "Pêssego",
    "selo": "Pulverização frequente",
    "imagem": "https://commons.wikimedia.org/wiki/Special:FilePath/Autumn_Red_peaches.jpg?width=800",
    "agrotoxicos": [
      "Iprodiona",
      "Carbendazim",
      "Diazinona"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Risco em crianças"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍈",
    "nome": "Goiaba",
    "selo": "Campeã (A Pública)",
    "imagem": "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Abamectina",
      "Carbendazim",
      "Clorpirifós"
    ],
    "riscos": [
      "Toxicidade nervosa",
      "Provável câncer",
      "Risco em gestantes"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍋",
    "nome": "Limão",
    "selo": "Pulverização pesada",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/960px-P1030323.JPG",
    "agrotoxicos": [
      "Imidacloprido",
      "Acefato",
      "Tiametoxam"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Toxicidade reprodutiva",
      "Risco infantil"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍊",
    "nome": "Mexerica / Tangerina",
    "selo": "Citros com resíduos",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg",
    "agrotoxicos": [
      "Carbendazim",
      "Imazalil",
      "Clorpirifós"
    ],
    "riscos": [
      "Disrupção endócrina",
      "Neurotoxicidade",
      "Provável carcinógeno"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🥭",
    "nome": "Mamão",
    "selo": "Resíduos detectados",
    "imagem": "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Mancozebe",
      "Tebuconazol",
      "Cipermetrina"
    ],
    "riscos": [
      "Disrupção tireoidiana",
      "Risco reprodutivo",
      "Toxicidade hepática"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🟣",
    "nome": "Maracujá",
    "selo": "Aplicação contínua",
    "imagem": "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Mancozebe",
      "Difenoconazol",
      "Abamectina"
    ],
    "riscos": [
      "Disrupção endócrina",
      "Neurotoxicidade",
      "Toxicidade hepática"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🥝",
    "nome": "Kiwi",
    "selo": "Importação com resíduos",
    "imagem": "https://commons.wikimedia.org/wiki/Special:FilePath/Kiwi_aka.jpg?width=800",
    "agrotoxicos": [
      "Iprodiona",
      "Boscalida",
      "Fludioxonil"
    ],
    "riscos": [
      "Suspeita de carcinogenicidade",
      "Toxicidade hepática",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🟣",
    "nome": "Ameixa",
    "selo": "Resíduos persistentes",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/960px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "agrotoxicos": [
      "Carbendazim",
      "Tebuconazol",
      "Iprodiona"
    ],
    "riscos": [
      "Disrupção hormonal",
      "Risco reprodutivo",
      "Suspeita de câncer"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍎",
    "nome": "Caju",
    "selo": "Cultivo no Nordeste",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/960px-Cashew_apples.jpg",
    "agrotoxicos": [
      "Mancozebe",
      "Endosulfan",
      "Cipermetrina"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção tireoidiana",
      "Substância proibida em vários países"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🍒",
    "nome": "Acerola",
    "selo": "Pulverização intensa",
    "imagem": "https://loremflickr.com/800/600/acerola,cherry?lock=15",
    "agrotoxicos": [
      "Abamectina",
      "Imidacloprido",
      "Tiametoxam"
    ],
    "riscos": [
      "Toxicidade neurológica",
      "Risco infantil",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Frutas",
    "emoji": "🫐",
    "nome": "Mirtilo / Amora",
    "selo": "Cultivo intensivo",
    "imagem": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Boscalida",
      "Iprodiona",
      "Fenhexamida"
    ],
    "riscos": [
      "Disrupção endócrina",
      "Toxicidade hepática",
      "Suspeita de câncer"
    ],
    "metodo_titulo": "Frutas com casca fina",
    "metodo_passos": [
      "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
      "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue novamente e, quando fizer sentido, descarte a casca."
    ],
    "importante": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
    "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
  },
  {
    "categoria": "Verduras",
    "emoji": "🥬",
    "nome": "Alface",
    "selo": "Folhas retêm resíduos",
    "imagem": "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Carbofurano",
      "Permetrina",
      "Deltametrina"
    ],
    "riscos": [
      "Toxicidade aguda alta",
      "Efeitos neurológicos",
      "Risco a crianças e gestantes"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🥬",
    "nome": "Couve",
    "selo": "Aplicações frequentes",
    "imagem": "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Cipermetrina",
      "Lambda-cialotrina",
      "Acefato"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Toxicidade reprodutiva",
      "Risco infantil"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🥬",
    "nome": "Espinafre",
    "selo": "Resíduos retidos nas folhas",
    "imagem": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Clorpirifós",
      "Permetrina",
      "Imidacloprido"
    ],
    "riscos": [
      "Dano neurológico",
      "Disrupção hormonal",
      "Risco em gestantes"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🌿",
    "nome": "Rúcula",
    "selo": "Folhas finas, alta retenção",
    "imagem": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Permetrina",
      "Deltametrina",
      "Acefato"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Toxicidade aguda",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🌿",
    "nome": "Agrião",
    "selo": "Cultivo úmido, alta absorção",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Watercress_%282%29.JPG/960px-Watercress_%282%29.JPG",
    "agrotoxicos": [
      "Clorpirifós",
      "Permetrina",
      "Carbofurano"
    ],
    "riscos": [
      "Neurotoxicidade severa",
      "Risco gestacional",
      "Toxicidade aguda"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🥬",
    "nome": "Repolho",
    "selo": "Múltiplas pulverizações",
    "imagem": "https://commons.wikimedia.org/wiki/Special:FilePath/Cabbage_and_cross_section_on_white.jpg?width=800",
    "agrotoxicos": [
      "Cipermetrina",
      "Acefato",
      "Deltametrina"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Risco infantil"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🥦",
    "nome": "Brócolis",
    "selo": "Resíduos nos floretes",
    "imagem": "https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Clorpirifós",
      "Cipermetrina",
      "Lambda-cialotrina"
    ],
    "riscos": [
      "Toxicidade neurológica",
      "Disrupção endócrina",
      "Risco infantil"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🥦",
    "nome": "Couve-flor",
    "selo": "Aplicações repetidas",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/960px-Chou-fleur_02.jpg",
    "agrotoxicos": [
      "Cipermetrina",
      "Acefato",
      "Deltametrina"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Toxicidade reprodutiva",
      "Disrupção hormonal"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🌿",
    "nome": "Chicória / Almeirão",
    "selo": "Retém resíduos nas folhas",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG/960px-Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG",
    "agrotoxicos": [
      "Permetrina",
      "Deltametrina",
      "Acefato"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção endócrina",
      "Risco gestacional"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🌿",
    "nome": "Mostarda (folha)",
    "selo": "Cultivo com pesticidas",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/4/42/Brassica_juncea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-168.jpg",
    "agrotoxicos": [
      "Clorpirifós",
      "Cipermetrina",
      "Acefato"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Risco infantil"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Verduras",
    "emoji": "🌿",
    "nome": "Salsa / Coentro",
    "selo": "Folhas finas com alta retenção",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Petroselinum.jpg/960px-Petroselinum.jpg",
    "agrotoxicos": [
      "Clorpirifós",
      "Permetrina",
      "Deltametrina"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Toxicidade aguda",
      "Risco gestacional"
    ],
    "metodo_titulo": "Folhas e ervas",
    "metodo_passos": [
      "Separe folha por folha e retire partes machucadas.",
      "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
      "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
    ],
    "importante": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
    "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
  },
  {
    "categoria": "Legumes",
    "emoji": "🫑",
    "nome": "Pimentão",
    "selo": "Top 3 da Anvisa",
    "imagem": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Acefato",
      "Cipermetrina",
      "Endosulfan",
      "Metamidofós"
    ],
    "riscos": [
      "Intoxicação aguda (náuseas, convulsões)",
      "Danos neurológicos",
      "Substâncias proibidas em vários países"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🍅",
    "nome": "Tomate",
    "selo": "Alta exposição diária",
    "imagem": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Clorotalonil",
      "Mancozebe",
      "Tebuconazol"
    ],
    "riscos": [
      "Ação carcinogênica possível",
      "Disrupção endócrina",
      "Irritação respiratória"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🥒",
    "nome": "Pepino",
    "selo": "Campeão Anvisa 2024",
    "imagem": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Acefato",
      "Carbendazim",
      "Clorotalonil"
    ],
    "riscos": [
      "Disrupção endócrina",
      "Provável carcinógeno",
      "Toxicidade reprodutiva"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🥒",
    "nome": "Abobrinha",
    "selo": "Resíduos detectados",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/960px-CSA-Striped-Zucchini.jpg",
    "agrotoxicos": [
      "Mancozebe",
      "Clorpirifós",
      "Lambda-cialotrina"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção tireoidiana",
      "Risco infantil"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🍆",
    "nome": "Berinjela",
    "selo": "Pulverização frequente",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/960px-Solanum_melongena_24_08_2012_%281%29.JPG",
    "agrotoxicos": [
      "Acefato",
      "Cipermetrina",
      "Endosulfan"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Substância proibida em vários países"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🥒",
    "nome": "Chuchu",
    "selo": "Resíduos detectados (PARA)",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chayote_BNC.jpg/960px-Chayote_BNC.jpg",
    "agrotoxicos": [
      "Acefato",
      "Clorpirifós",
      "Carbendazim"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção endócrina",
      "Toxicidade reprodutiva"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🫛",
    "nome": "Quiabo",
    "selo": "Pulverização constante",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hong_Kong_Okra_Aug_25_2012.JPG/960px-Hong_Kong_Okra_Aug_25_2012.JPG",
    "agrotoxicos": [
      "Cipermetrina",
      "Acefato",
      "Lambda-cialotrina"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Risco infantil"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🎃",
    "nome": "Abóbora",
    "selo": "Resíduos persistentes",
    "imagem": "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Mancozebe",
      "Clorpirifós",
      "Imidacloprido"
    ],
    "riscos": [
      "Disrupção tireoidiana",
      "Neurotoxicidade",
      "Risco gestacional"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🫛",
    "nome": "Vagem",
    "selo": "Resíduos detectados",
    "imagem": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Cipermetrina",
      "Lambda-cialotrina",
      "Acefato"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Risco infantil"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Legumes",
    "emoji": "🫛",
    "nome": "Ervilha",
    "selo": "Cultivo intensivo",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/960px-Peas_in_pods_-_Studio.jpg",
    "agrotoxicos": [
      "Clorpirifós",
      "Lambda-cialotrina",
      "Imidacloprido"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Risco infantil",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Legumes de casca exposta",
    "metodo_passos": [
      "Lave em água corrente e esfregue com as mãos ou escova limpa.",
      "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
      "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
    ],
    "importante": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
    "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🥕",
    "nome": "Cenoura",
    "selo": "Absorção pelas raízes",
    "imagem": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Difenoconazol",
      "Linuron",
      "Aldicarbe"
    ],
    "riscos": [
      "Suspeita de câncer",
      "Toxicidade hepática e renal",
      "Resíduos persistentes no solo"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🥔",
    "nome": "Batata",
    "selo": "Consumo massivo",
    "imagem": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Glufosinato",
      "Imidacloprido",
      "Clorpirifós"
    ],
    "riscos": [
      "Toxicidade reprodutiva",
      "Neurotoxicidade",
      "Dano imunológico"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🍠",
    "nome": "Batata-doce",
    "selo": "Absorção no solo",
    "imagem": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c23?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Clorpirifós",
      "Carbofurano",
      "Imidacloprido"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Toxicidade aguda",
      "Risco infantil"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🟣",
    "nome": "Beterraba",
    "selo": "Raiz com retenção",
    "imagem": "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Clorpirifós",
      "Lambda-cialotrina",
      "Carbendazim"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção endócrina",
      "Suspeita de câncer"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🥔",
    "nome": "Mandioca",
    "selo": "Cultivo amplo",
    "imagem": "https://commons.wikimedia.org/wiki/Special:FilePath/Cassava.jpg?width=800",
    "agrotoxicos": [
      "Glifosato",
      "2,4-D",
      "Atrazina"
    ],
    "riscos": [
      "Provável carcinógeno (IARC)",
      "Disrupção endócrina",
      "Neurotoxicidade"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🍠",
    "nome": "Inhame",
    "selo": "Resíduos no solo",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yam_at_monday_market_kaduna_state_01.jpg/960px-Yam_at_monday_market_kaduna_state_01.jpg",
    "agrotoxicos": [
      "Glifosato",
      "Carbofurano",
      "Clorpirifós"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Possível câncer",
      "Toxicidade reprodutiva"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Tubérculos",
    "emoji": "🌶️",
    "nome": "Rabanete",
    "selo": "Raiz rápida e contaminada",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/960px-Radish_3371103037_4ab07db0bf_o.jpg",
    "agrotoxicos": [
      "Clorpirifós",
      "Permetrina",
      "Acefato"
    ],
    "riscos": [
      "Neurotoxicidade",
      "Disrupção hormonal",
      "Risco infantil"
    ],
    "metodo_titulo": "Raízes e tubérculos",
    "metodo_passos": [
      "Escove bem a casca em água corrente para remover terra e resíduos externos.",
      "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
      "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
    ],
    "importante": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
    "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
  },
  {
    "categoria": "Grãos",
    "emoji": "🍚",
    "nome": "Arroz",
    "selo": "Base da alimentação",
    "imagem": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Glifosato",
      "Carbofurano",
      "Tebuconazol"
    ],
    "riscos": [
      "Provável carcinógeno",
      "Neurotoxicidade",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Grãos e cereais",
    "metodo_passos": [
      "Selecione e descarte impurezas visíveis antes do preparo.",
      "Lave em água corrente até a água sair mais limpa.",
      "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
    ],
    "importante": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
    "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
  },
  {
    "categoria": "Grãos",
    "emoji": "🫘",
    "nome": "Feijão",
    "selo": "Resíduos detectados (PARA)",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/French_beans_J1.JPG/960px-French_beans_J1.JPG",
    "agrotoxicos": [
      "Glifosato",
      "Clorpirifós",
      "Carbendazim"
    ],
    "riscos": [
      "Suspeita de câncer",
      "Neurotoxicidade",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Grãos e cereais",
    "metodo_passos": [
      "Selecione e descarte impurezas visíveis antes do preparo.",
      "Lave em água corrente até a água sair mais limpa.",
      "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
    ],
    "importante": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
    "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
  },
  {
    "categoria": "Grãos",
    "emoji": "🌾",
    "nome": "Trigo",
    "selo": "Aplicação pré-colheita",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg",
    "agrotoxicos": [
      "Glifosato",
      "Tebuconazol",
      "Clorpirifós"
    ],
    "riscos": [
      "Provável carcinógeno (IARC)",
      "Disrupção hormonal",
      "Toxicidade hepática"
    ],
    "metodo_titulo": "Grãos e cereais",
    "metodo_passos": [
      "Selecione e descarte impurezas visíveis antes do preparo.",
      "Lave em água corrente até a água sair mais limpa.",
      "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
    ],
    "importante": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
    "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
  },
  {
    "categoria": "Grãos",
    "emoji": "🫘",
    "nome": "Soja",
    "selo": "Cultivo com mais defensores agrícolas no Brasil",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/8/82/Soybean.USDA.jpg",
    "agrotoxicos": [
      "Glifosato",
      "2,4-D",
      "Imidacloprido"
    ],
    "riscos": [
      "Provável carcinógeno",
      "Disrupção endócrina",
      "Contaminação ambiental"
    ],
    "metodo_titulo": "Grãos e cereais",
    "metodo_passos": [
      "Selecione e descarte impurezas visíveis antes do preparo.",
      "Lave em água corrente até a água sair mais limpa.",
      "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
    ],
    "importante": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
    "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
  },
  {
    "categoria": "Grãos",
    "emoji": "🌾",
    "nome": "Aveia",
    "selo": "Resíduos pré-colheita",
    "imagem": "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Glifosato",
      "Clorpirifós",
      "Tebuconazol"
    ],
    "riscos": [
      "Provável carcinógeno",
      "Neurotoxicidade",
      "Disrupção endócrina"
    ],
    "metodo_titulo": "Grãos e cereais",
    "metodo_passos": [
      "Selecione e descarte impurezas visíveis antes do preparo.",
      "Lave em água corrente até a água sair mais limpa.",
      "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
    ],
    "importante": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
    "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
  },
  {
    "categoria": "Grãos",
    "emoji": "🌽",
    "nome": "Milho",
    "selo": "Transgênico majoritário",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "agrotoxicos": [
      "Glifosato",
      "Atrazina",
      "Clorpirifós"
    ],
    "riscos": [
      "Provável carcinógeno",
      "Disrupção endócrina",
      "Neurotoxicidade"
    ],
    "metodo_titulo": "Grãos e cereais",
    "metodo_passos": [
      "Selecione e descarte impurezas visíveis antes do preparo.",
      "Lave em água corrente até a água sair mais limpa.",
      "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
    ],
    "importante": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
    "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
  },
  {
    "categoria": "Outros",
    "emoji": "🧅",
    "nome": "Cebola",
    "selo": "Cultivo com resíduos",
    "imagem": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Iprodiona",
      "Mancozebe",
      "Clorpirifós"
    ],
    "riscos": [
      "Disrupção endócrina",
      "Neurotoxicidade",
      "Toxicidade tireoidiana"
    ],
    "metodo_titulo": "Bulbos e condimentos",
    "metodo_passos": [
      "Lave a parte externa em água corrente antes de descascar ou cortar.",
      "Retire as camadas externas mais expostas quando houver casca seca ou película.",
      "Depois do corte, evite reaproveitar cascas e partes superficiais no preparo."
    ],
    "importante": "Descartar as camadas externas tende a ser a etapa mais útil nesses itens.",
    "fonte": "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes."
  },
  {
    "categoria": "Outros",
    "emoji": "🧄",
    "nome": "Alho",
    "selo": "Aplicações em campo",
    "imagem": "https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?auto=format&fit=crop&w=800&q=80",
    "agrotoxicos": [
      "Mancozebe",
      "Tebuconazol",
      "Clorpirifós"
    ],
    "riscos": [
      "Disrupção tireoidiana",
      "Neurotoxicidade",
      "Risco hepático"
    ],
    "metodo_titulo": "Bulbos e condimentos",
    "metodo_passos": [
      "Lave a parte externa em água corrente antes de descascar ou cortar.",
      "Retire as camadas externas mais expostas quando houver casca seca ou película.",
      "Depois do corte, evite reaproveitar cascas e partes superficiais no preparo."
    ],
    "importante": "Descartar as camadas externas tende a ser a etapa mais útil nesses itens.",
    "fonte": "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes."
  }
];
