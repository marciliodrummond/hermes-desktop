---
version: alpha
name: Empresarial 360 — Centurion
description: Sistema da marca do Box Empresarial 360 — direção American Express Centurion. Preto absoluto de cartão de metal fosco, platina escovada como voz estrutural e ouro fosco (continuidade SI) reservado ao apex de valor. Dois metais com papéis fixos. Prestígio corporativo, exatidão, anti-hype, anti-terminal. Revisão 2 auditada com cobertura completa de componentes, breakpoints, alvos de toque e mapeamento Tailwind v4 + shadcn/ui para Claude Code.
colors:
  # ===== Marca: dois metais com papéis fixos =====
  primary: "#E2C074"            # Ouro Fosco (continuidade SI) — apex de valor e a ÚNICA ação primária por contexto
  on-primary: "#030409"         # texto/ícone sobre ouro = preto, sempre
  secondary: "#C2C7CE"          # Platina Escovada — a voz estrutural e o metal do dia a dia
  on-secondary: "#05070B"       # texto "gravado" sobre platina = quase-preto
  tertiary: "#F4F5F6"           # off-white quase-neutro de leitura
  # ===== Canvas e superfícies (dark-first, grafite frio ascendente) =====
  canvas: "#030409"             # Preto Absoluto (continuidade SI) — o cartão de metal fosco
  surface: "#0A0C10"
  surface-container: "#121419"
  surface-container-high: "#1A1D22"
  surface-container-highest: "#282A32"   # grafite SI
  on-surface: "#F4F5F6"         # off-white quase-neutro (frio sutil, casa com a platina)
  on-surface-muted: "#A7ABB2"   # metadados, legendas
  on-surface-faint: "#787C84"   # quase-silêncio (passa AA normal, no limite)
  border: "#2B2E34"             # filete sutil (decorativo) — tb. --border/--input no shadcn
  border-strong: "#3A3E45"      # filete estrutural
  focus-ring: "#D4D8DD"         # anel de foco em platina clara — alta visibilidade (--ring)
  link: "#C2C7CE"               # link inline = platina (preserva escassez do ouro)
  link-hover: "#E9ECEF"
  # ===== Rampa da platina (metal estrutural) =====
  platinum-90: "#E9ECEF"        # brilho gravado (sheen) — realces e topo biselado
  platinum-70: "#C2C7CE"        # platina primária — botão-metal, rótulos, filetes premium
  platinum-50: "#9AA0A8"        # platina média — texto secundário sobre escuro
  platinum-30: "#6B7178"        # aço — filetes/decorativo (nunca em texto pequeno)
  platinum-veil: "#1A1D22"      # platina rebaixada — fundo de badge/inset
  # ===== Rampa do ouro (valor — usada com avareza ainda maior que no SI) =====
  gold-70: "#ECD49A"            # hover/sheen
  gold-60: "#E2C074"            # ouro pleno = primary
  gold-50: "#C9A24F"            # active
  gold-30: "#7A5F2A"            # ouro profundo — gravação e o ouro do TEMA CLARO (sobre alabastro)
  gold-veil: "#3A2F18"          # ouro rebaixado — fundo de badge de valor
  # ===== Superfícies de documento (tema claro embutido p/ peças, contratos, pareceres) =====
  paper: "#F4F2EC"              # alabastro quente — a "página" de uma peça/contrato
  on-paper: "#16181D"           # tinta
  paper-muted: "#5C5F66"        # metadados na página
  paper-border: "#D8D4C8"       # filete na página
  # ===== Funcionais (dessaturados, não competem com os metais) =====
  success: "#7FB08A"
  warning: "#D8B25A"
  error: "#C77B72"
  error-strong: "#B86A61"       # estado hover/active do botão destrutivo
  on-success: "#04150A"
  on-warning: "#1A1404"
  on-error: "#1A0606"
typography:
  nameplate:
    fontFamily: Archivo Expanded
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.22em
  display-xl:
    fontFamily: Archivo
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.025em
  display-lg:
    fontFamily: Archivo
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo
    fontSize: 29px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Archivo
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  editorial:
    fontFamily: Source Serif 4
    fontSize: 25px
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "'ital' 1"
  editorial-lead:
    fontFamily: Source Serif 4
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'ital' 1"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.62
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.01em
  eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
  data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "'tnum' 1, 'zero' 1"
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.1
    fontFeature: "'tnum' 1, 'zero' 1"
    letterSpacing: -0.01em
  ghost-numeral:
    fontFamily: Archivo Expanded
    fontSize: 120px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.02em
spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  "2xl": 64px
  "3xl": 96px
  "4xl": 160px
  gutter: 24px
  margin: 32px
rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 10px
  xl: 16px
  full: 9999px
elevation:
  flat: "none"
  hairline: "0 0 0 1px {colors.border}"
  raised-metal: "inset 0 1px 0 0 #FFFFFF14, 0 1px 2px 0 #00000080, 0 8px 24px -12px #000000B3"
  overlay: "0 28px 70px -24px #000000C2"
components:
  # ---------- Botões ----------
  button-primary:
    backgroundColor: "{colors.gold-60}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.gold-70}"
    textColor: "{colors.on-primary}"
  button-primary-active:
    backgroundColor: "{colors.gold-50}"
    textColor: "{colors.on-primary}"
  button-primary-focus:
    backgroundColor: "{colors.gold-60}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-faint}"
  button-metal:
    backgroundColor: "{colors.platinum-70}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 44px
  button-metal-hover:
    backgroundColor: "{colors.platinum-90}"
    textColor: "{colors.on-secondary}"
  button-metal-active:
    backgroundColor: "{colors.platinum-50}"
    textColor: "{colors.on-secondary}"
  button-metal-focus:
    backgroundColor: "{colors.platinum-70}"
    textColor: "{colors.on-secondary}"
  button-metal-disabled:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-faint}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.platinum-70}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 44px
  button-ghost-hover:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-90}"
  button-ghost-active:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-50}"
  button-ghost-disabled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-surface-faint}"
  button-destructive:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 44px
  button-destructive-hover:
    backgroundColor: "{colors.error-strong}"
    textColor: "{colors.on-error}"
  # ---------- Formulário ----------
  input-text:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 44px
  input-text-hover:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
  input-text-focus:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
  input-text-error:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.error}"
  input-text-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-faint}"
  textarea:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px
  textarea-focus:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
  textarea-error:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.error}"
  select-trigger:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 44px
  select-trigger-focus:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
  select-trigger-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-faint}"
  select-menu:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 8px
  select-option:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: 10px
  select-option-hover:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
  checkbox:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-50}"
    rounded: "{rounded.sm}"
    size: 20px
  checkbox-checked:
    backgroundColor: "{colors.platinum-70}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.sm}"
    size: 20px
  checkbox-focus:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-70}"
  checkbox-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-faint}"
  radio:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-50}"
    rounded: "{rounded.full}"
    size: 20px
  radio-selected:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-70}"
    rounded: "{rounded.full}"
    size: 20px
  radio-focus:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.platinum-70}"
  switch-track-off:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.full}"
  switch-track-on:
    backgroundColor: "{colors.platinum-70}"
    rounded: "{rounded.full}"
  switch-thumb:
    backgroundColor: "{colors.platinum-90}"
    rounded: "{rounded.full}"
  # ---------- Contêineres e overlays ----------
  card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-metal:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-document:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-paper}"
    rounded: "{rounded.sm}"
    padding: 40px
  modal:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  popover:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 8px
  menu-item:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: 10px
  menu-item-hover:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
  tooltip:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 10px
  toast:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  # ---------- Navegação ----------
  nav-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
    padding: 12px
  nav-item-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    padding: 12px
  tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
    padding: 12px
  tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    padding: 12px
  sidebar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    padding: 16px
  sidebar-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 10px
  sidebar-item-active:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 10px
  link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-hover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.link-hover}"
  # ---------- Dados e feedback ----------
  table-header:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
    padding: 12px
  table-cell-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: 12px
  table-cell-num:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.data}"
    padding: 12px
  table-row-hover:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
  chip:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-gold:
    backgroundColor: "{colors.gold-veil}"
    textColor: "{colors.gold-70}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-metal:
    backgroundColor: "{colors.platinum-veil}"
    textColor: "{colors.platinum-70}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-status-success:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.success}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-status-warning:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.warning}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-status-error:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.error}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 6px
  status-solid-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px
  status-solid-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-warning}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px
  status-solid-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px
  progress-track:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.full}"
    height: 6px
  progress-fill:
    backgroundColor: "{colors.platinum-70}"
    rounded: "{rounded.full}"
    height: 6px
  skeleton:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.sm}"
  avatar:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    size: 40px
  # ---------- Filetes ----------
  divider-rule:
    backgroundColor: "{colors.border}"
    height: 1px
  divider-strong:
    backgroundColor: "{colors.border-strong}"
    height: 1px
  divider-platinum:
    backgroundColor: "{colors.platinum-30}"
    height: 1px
  # ---------- Tema claro (documento / alabastro) ----------
  badge-gold-on-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.gold-30}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 6px
  document-caption:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-muted}"
    typography: "{typography.label-sm}"
  document-rule:
    backgroundColor: "{colors.paper-border}"
    height: 1px
---

# Empresarial 360 — Design System (Centurion)

> Revisão 2 — auditada para construção de app premium por agente (Claude Code).
> Stack-alvo: React + Vite + TypeScript + Tailwind v4 + shadcn/ui. Veja a seção
> **Integração** ao final para o mapeamento direto de variáveis.

## Overview

O Empresarial 360 é o Box que coloca o advogado para operar a frente empresarial
de uma companhia — societário, contratos, recuperação de crédito, registro &
marcas, LGPD, contencioso e a própria operação do escritório — no nível de quem
joga o jogo corporativo a sério. A referência de marca é o **American Express
Centurion**: o cartão de metal preto fosco, reservado a um *tier* de acesso que
não se compra por impulso. O sistema visual precisa fazer o produto parecer esse
cartão em forma de software — peso, gravação, exatidão e contenção.

A personalidade é **prestígio corporativo de metal**, na mesma família de
sofisticação editorial que o SI fixou no Box anterior (Rolex), mas com uma
gramática própria. A tela é **preto absoluto** (#030409) — não o cinza de
dashboard, o preto do cartão. Sobre ele, a decisão que define tudo: **dois
metais com papéis fixos.** A **platina escovada** (#C2C7CE) é a voz estrutural e
do dia a dia — filetes, o botão-metal de trabalho, rótulos, molduras. O **ouro
fosco** (#E2C074, continuidade direta do SI) é o apex: aparece apenas no valor
real e na única ação primária por contexto, com avareza ainda maior que no SI,
justamente porque a platina agora carrega o peso metálico.

A UMA coisa inesquecível: **a platina é o metal do trabalho; o ouro é o metal do
valor — e nunca trocam de papel.** Some-se a isso a profundidade de **metal
biselado** (um realce de 1px no topo + sombra fina) que faz os objetos-chave
parecerem placas gravadas, e a estética fica reconhecível à distância e
impossível de confundir com os outros Boxes.

Três proibições que definem a marca tanto quanto as cores: **zero estética de
terminal/console/tech-bro** (a densidade é corporativa, não de IDE), **zero
emojis** (exceto os funcionais de status, sempre com ícone + rótulo) e **zero
gradiente saturado** — o brilho aqui é de metal escovado, não de néon.

## Colors

A paleta é **disciplinada e bimetálica**: preto, platina, ouro, grafite frio,
off-white. A disciplina é o luxo; a separação rígida de papéis entre os dois
metais é a identidade.

- **Primary — Ouro Fosco (#E2C074):** o metal do valor. Continuidade direta do
  SI. Usado com avareza máxima — talvez 3–4% da área de uma tela. Reservado à
  **única ação primária por contexto** (o "fechar/contratar", o CTA), a números
  de valor (honorários recuperados, economia tributária) e a gravações de
  destaque. Rampa 50/60/70 para estados; `gold-30` (#7A5F2A) é o ouro profundo
  usado em gravação e, sobretudo, como **ouro do tema claro** (sobre alabastro,
  onde o ouro pleno teria contraste insuficiente). `gold-veil` (#3A2F18) é o
  fundo de badge de valor. Texto sobre ouro pleno é **sempre** preto (#030409).
- **Secondary — Platina Escovada (#C2C7CE):** o metal do trabalho. É a voz mais
  *visível* do sistema (o botão-metal usado o tempo todo, filetes premium,
  rótulos gravados, links), mas nunca compete com o ouro porque ocupa outro
  papel: estrutura, não valor. Rampa 30/50/70/90: `platinum-90` é o brilho
  gravado (sheen); `platinum-70` a platina primária; `platinum-50` texto
  secundário sobre escuro; `platinum-30` aço para filetes (nunca em texto
  pequeno). Texto sobre platina é **quase-preto** (#05070B).
- **Canvas — Preto Absoluto (#030409):** a base. Continuidade SI. A profundidade
  nasce da escala **fria** ascendente de superfícies (`surface` → `-container` →
  `-high` → `-highest`/grafite #282A32), mais fria que a do SI para combinar com
  a platina.
- **On-surface — Off-white quase-neutro (#F4F5F6):** texto de leitura. `muted`
  (#A7ABB2) para metadados; `faint` (#787C84) para o quase-silêncio (validado em
  AA normal, no limite — não usar tom mais escuro que este em texto).
- **Link (#C2C7CE → hover #E9ECEF):** links inline são **platina**, não ouro —
  num app jurídico há muitos ("ver cláusula", citações, refs), e usá-los em ouro
  diluiria a escassez do apex. Sempre sublinhados (não dependem só de cor).
- **Paper — Alabastro (#F4F2EC):** superfície de **documento**. O Box produz
  peças, contratos e pareceres que vivem no branco — então existe uma "página"
  embutida (tinta #16181D sobre alabastro) para preview e leitura. É o tema claro
  canônico de conteúdo de documento.
- **Funcionais:** dessaturados de propósito (verde-sálvia, âmbar, terracota) para
  não brigar com platina nem ouro. Duas formas: **texto** sobre superfície escura
  (`badge-status-*`) e **sólido** com texto escuro `on-*` (`status-solid-*`).
  `error-strong` (#B86A61) é o hover do botão destrutivo. Status sempre com ícone
  + rótulo (a11y 1.4.1).

Todos os pares texto/fundo são validados por script para WCAG AA; a grande
maioria atinge AAA. Os únicos abaixo de 4,5:1 são estados `disabled`, isentos por
WCAG 1.4.3.

## Typography

Quatro vozes, cada uma com função fixa — a troca entre elas **é** o design. O
sistema dá ao Empresarial uma voz de display própria (Archivo, a gravação do
cartão) e preserva a continuidade SI nas vozes autoral, técnica e de dados.

- **Archivo (display, headlines & nameplate, 600–700):** a voz da gravação
  corporativa. O `nameplate` (Archivo Expanded, CAIXA ALTA, tracking **positivo**
  +0.22em) reproduz a sensação do wordmark "CENTURION" cravado no metal — topo do
  app, selos, rótulos institucionais. Headlines e display usam tracking
  **negativo** (densidade moderna). Essa tensão — caixa-alta espaçada vs. título
  apertado — é proposital. O `ghost-numeral` (Archivo Expanded 120px) é o numeral
  gigante de seção.
- **Source Serif 4 itálico (editorial):** a voz autoral, idêntica à do SI
  (continuidade de marca entre Boxes). Aparece **só** em teses, leads de
  argumento e "carta do escritório". Usar com parcimônia. (Georgia itálico é o
  fallback.)
- **Inter (body, labels & UI, 400–500):** a voz de leitura e de operação. Corpo,
  rótulos, formulários, tabelas. `label-sm` cobre microcopy e captions. Neutra,
  de banco/escritório, ótima em densidade.
- **JetBrains Mono (data & eyebrow):** a voz técnica de precisão. Eyebrows em
  caixa alta e **todo dado numérico** com tabular-nums — honorários, valores de
  crédito, prazos, números de processo (CNJ), cálculos. `data-lg` é o número de
  destaque (KPIs, resultado de calculadora). Mono **nunca** vira estética de
  terminal: é exatidão financeira, não IDE.

Regra de ouro: no máximo duas vozes por bloco. Mono nunca em texto corrido. Serif
itálico nunca em UI funcional. Nameplate só em gravação institucional, nunca em
texto de leitura.

## Layout

Estrutura **editorial com densidade corporativa**. O Empresarial é, ao mesmo
tempo, produto premium e conjunto de ferramentas operacionais — então o ritmo é
**dual**:

- **Superfícies institucionais** (capa, abertura de pilar, tese, recap): grid de
  12 colunas, max-width 1200px, margem 32px, gutter 24px, ritmo vertical amplo
  (até `4xl`/160px entre blocos maiores). Espaço preto vazio é status, não falta.
  Ancoradas pela anatomia: nameplate/eyebrow → numeral-fantasma → headline Archivo
  → lead em serif itálico → corpo Inter.
- **Superfícies operacionais** (tabelas de cláusulas, agenda de prazos,
  calculadoras, dashboards): densidade maior, escala `sm`–`md`, coluna de leitura
  de até 720px para documentos. A exatidão vence o ar — linhas alinhadas, números
  tabulares, filetes claros separando registros.

A regra: institucional respira, operacional adensa — mas ambos usam a mesma
escala de tokens (4/8) e os mesmos filetes.

### Responsividade

Mobile-first; advogados usam o produto também em **iPad/tablet** (priorize o
breakpoint `md`). Breakpoints e conteúdo:

- `sm` 640px · `md` 768px (tablet) · `lg` 1024px · `xl` 1280px.
- **Container** central até 1200px; **coluna de leitura/documento** 720px.
- **Sidebar** de 280px no desktop, recolhível a 72px (só ícones), e em *overlay*
  (drawer) abaixo de `lg`.
- **Padding de conteúdo** escala: 16px (mobile) → 24px (`md`) → 32px (`lg`+).
- **Grade**: 1 coluna no mobile, 2 no `md`, 12 colunas reais a partir de `lg`.
- Tabelas densas viram cartões empilhados (`card` + `table-cell-text`) abaixo de
  `md`, preservando os números em `data`.

## Elevation & Depth

**Profundidade de metal biselado + filete — quase nunca sombra difusa.** Sobre
preto absoluto, sombra suave some. A hierarquia vem de três fontes:

1. **Camadas tonais frias** ascendentes (a luminosidade das superfícies).
2. **Filete de 1px** (`divider-rule`/`divider-strong`/`divider-platinum`) — o
   recurso editorial que separa blocos; em platina, vira a moldura "gravada".
3. **Biselado de metal** (`raised-metal`): realce branco de 1px no topo + borda
   fina + lift suave, dando aos objetos-chave (botão-metal, card-metal, o
   "cartão" do hero) a sensação tátil de placa de metal escovado. É a assinatura
   de profundidade deste Box.

Sombra real (`overlay`) fica reservada ao que flutua de fato: modais, popovers,
selects e toasts. O **scrim** do modal é canvas a ~72% de opacidade
(`rgb(3 4 9 / 0.72)`). Elevação genérica (`shadow-md` em tudo) contradiz a marca.

## Shapes

Geometria **exata e contida** — mais fechada que todos os Boxes anteriores
(Imobiliário 20px, Defesa Patrimonial 12px), porque "corporativo de precisão"
pede cantos mais retos. Raio base de **6px** (`md`) em controles, 10px (`lg`) em
cards, 4px (`sm`) em inputs e blocos menores. Placas gravadas, documento e
nameplate usam **canto reto** (`none`/0px) com filete de platina. Chips e badges
usam `full` (pílula). Filetes são sempre retos.

A escolha entre reto (placa/documento) e arredondado (produto/controle) é
**semântica, não estética** — nunca misturar afiado e arredondado ao acaso na
mesma composição.

## Components

Cobertura completa de app: ações, formulário inteiro, overlays, navegação, dados
e feedback. Cada interativo tem seus estados.

- **Buttons — dois metais, dois papéis:** `button-primary` é **ouro** (texto
  preto) — a ação mais importante e **única** por contexto; escassez obrigatória.
  `button-metal` é **platina** (texto gravado) — o botão de trabalho, o mais
  usado, com `raised-metal`. `button-ghost` é texto platina sobre canvas para
  ações terciárias. `button-destructive` é terracota para exclusões (hover em
  `error-strong`). Estados completos (hover/active/focus/disabled); `disabled`
  recua para grafite (isento de contraste). Foco **sempre** com anel `focus-ring`,
  nunca só cor.
- **Formulário:** `input-text`, `textarea`, `select-trigger` (+`select-menu`/
  `select-option`), `checkbox`/`checkbox-checked`, `radio`/`radio-selected`,
  `switch` (track-off/on + thumb). Affirmativos (check, radio, switch-on, fill)
  usam **platina**, não ouro — preservando a escassez do apex. Erro em terracota
  com ícone e mensagem (`body-sm`). Altura de toque mínima 44px nos controles de
  linha; alvo de 24px em checkbox/radio com área de clique de 44px.
- **Overlays:** `modal` (32px, `overlay` + scrim), `popover`/`menu-item` (com
  hover), `tooltip`, `toast`. Sempre em grafite elevado, nunca translúcidos sobre
  conteúdo crítico.
- **Cards:** `card` (operacional, 24px), `card-metal` (premium/hero biselado,
  32px — o "cartão"), `card-document` (a "página": alabastro com tinta, 40px —
  preview de peça/contrato/parecer no tema claro).
- **Navegação:** `nav-item`/`tab` em `muted`; `nav-item-active`/`tab-active` em
  bright **com filete de platina** sob o item (o ouro fica fora da navegação para
  não perder escassez). `sidebar` + `sidebar-item`/`-active` para o app-shell.
  `link` inline em platina sublinhada.
- **Dados e feedback:** `table-header` + `table-cell-text` + `table-cell-num`
  (JetBrains Mono tabular) + `table-row-hover` — a tabela é cidadão de primeira
  classe. `chip`. `badge-gold` só para **valor**; `badge-metal` para
  **categoria/estrutura**; `badge-status-*` (texto) e `status-solid-*` (sólido)
  para status, sempre com ícone + rótulo. `progress-track`/`-fill` (platina;
  variante ouro só para metas de valor). `skeleton` em grafite (sem shimmer
  colorido). `avatar` em grafite com iniciais.
- **Filetes:** `divider-rule` (padrão), `divider-strong` (estrutural) e
  `divider-platinum` (a moldura gravada premium) — componentes de primeira classe.
- **Tema claro (documento):** `badge-gold-on-paper` (ouro profundo legível sobre
  alabastro), `document-caption` e `document-rule` para a "página".

## Do's and Don'ts

- Do reservar o **ouro** à única ação primária por contexto e a números de valor
  real — ele só tem poder porque é raro.
- Don't usar ouro em navegação, links, filetes decorativos, affirmativos de
  formulário ou estados comuns — esse é o papel da **platina**. Os dois metais
  nunca trocam de função.
- Do dar à platina o trabalho pesado: botão-metal, filetes, rótulos, molduras,
  links, controles de formulário.
- Don't usar branco puro em texto; off-white frio (#F4F5F6) no escuro, tinta
  (#16181D) na página.
- Do trocar para Source Serif 4 itálico quando o conteúdo vira tese/argumento.
- Don't usar serif itálico nem o `nameplate` em UI funcional (botões, inputs).
- Do construir profundidade com camadas tonais frias, filetes de 1px e o biselado
  `raised-metal` nos objetos-chave.
- Don't aplicar `shadow-md` genérica em tudo nem usar gradiente saturado/néon — o
  brilho é de metal escovado.
- Don't cair em estética de terminal/console/tech-bro; mono é só para dados e
  eyebrows, nunca decorativo.
- Do manter cantos exatos (6px controles, reto em placa/documento) e nunca
  misturar afiado e arredondado ao acaso.
- Do garantir alvo de toque ≥44px em controles de linha e foco visível em tudo
  que é interativo.
- Don't sinalizar status só por cor; todo status tem ícone + rótulo, e nunca
  emoji fora dos funcionais.
- Do tratar todo par texto/fundo como validado em WCAG AA — não estimado.

## Theming

O sistema é **dark-first** (o cartão de metal preto é a identidade canônica do
app). O tema claro existe para **superfícies de documento** — o que o Box mais
produz.

- **Dark (canônico, app shell):** os tokens do front matter. Canvas #030409,
  metais e off-white frio. Padrão de toda a interface, menus, dashboards e
  ferramentas.
- **Light "Alabastro & Tinta" (documentos e impressão):** canvas `paper`
  (#F4F2EC), texto `on-paper` (#16181D), metadados `paper-muted` (#5C5F66),
  filetes `paper-border` (#D8D4C8). A platina vira aço-médio (#6B7178) como
  estrutura; o **ouro do tema claro é `gold-30` (#7A5F2A)** — legível sobre
  alabastro (o ouro pleno teria contraste insuficiente). Status mantêm os tons
  funcionais. Use em `card-document`, no preview/exportação de documentos e em
  views destinadas a papel. **Nunca** vista o app inteiro de claro — trairia a
  identidade do cartão.

## Motion

Movimento **exato e curto**, nunca lúdico. Transições de 160–220ms com easing
`cubic-bezier(0.2, 0, 0, 1)`. Hover do botão-metal pode deslocar levemente o
brilho (sheen) na platina; o ouro só sobe um passo na rampa. Sem bounce, sem
spring exagerado, sem parallax. Tudo respeita `prefers-reduced-motion: reduce`
(corta deslocamentos, mantém só opacidade). Skeletons em grafite, sem shimmer
colorido.

## Iconography

Ícones de **linha**, traço 1.5px, geométricos e precisos (Lucide ou Phosphor) —
nunca preenchidos coloridos, nunca pictóricos infantis. Cor padrão `platinum-70`;
ouro só quando o ícone acompanha uma ação primária ou número de valor. Tamanho
base 20px (24px em navegação). **Zero emojis** na interface, exceto os funcionais
de status, sempre com rótulo textual ao lado. Estrutura é platina, valor é ouro.

## Voice & Tone

Anti-hype e institucional, alinhado à voz da Super Inteligênc[IA]: frases diretas,
zero preenchimento, zero promessa inflada. O texto fala como um escritório sério
fala com um cliente sério — peso de critério, não de entusiasmo. Quando o conteúdo
vira argumento/tese, a voz muda (serif itálico) e ganha autoridade; no operacional,
é seca e exata.

## Padrões de domínio (Empresarial 360)

Os sete pilares — Societário, Contratos, Recuperação de Crédito, Registro &
Marcas, LGPD, Contencioso, Operação do Escritório — **não recebem cores
diferentes**. Isso quebraria a disciplina bimetálica. Cada pilar é distinguido
por **ícone + eyebrow**, não por matiz. A consistência é a marca.

- **Calculadoras** (crédito, honorários, exposição em contencioso): números em
  `data`/`data-lg` (mono tabular); resultado de valor em ouro (`data-lg` +
  `primary`); demais campos em platina/off-white.
- **Tabelas** (cláusulas, prazos, carteira de crédito, controle de marcas):
  `table-header` + `table-cell-text`/`-num` + `table-row-hover`; filete por
  linha; ordenação e estados com ícone, não só cor; colapsam em cartões no mobile.
- **Documentos** (peças, contratos, pareceres): renderizar em `card-document`
  (tema claro Alabastro & Tinta), coluna de leitura 720px, `document-rule` e
  `document-caption` para a diagramação da página.
- **Selos institucionais** (autoria, "tier" do Box, garantias): `nameplate` em
  caixa-alta gravada + `divider-platinum`, com ouro reservado ao selo de valor.

## Integração — Tailwind v4 + shadcn/ui (para Claude Code)

Este `DESIGN.md` é a fonte de verdade. Para um app premium na stack do projeto
(React + Vite + Tailwind v4 + shadcn/ui), use o bloco abaixo como drop-in em
`src/index.css`. O tema escuro é o `:root` canônico; `.theme-document` é o tema
claro para superfícies de documento.

Fontes (Google Fonts) — adicione ao `<head>` ou via `@import`:

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Expanded:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@1,8..60,400&display=swap');
```

Variáveis (mapeamento semântico → shadcn). Onde o shadcn espera um papel, o token
correspondente já está escolhido para não quebrar a disciplina dos dois metais —
`--primary` é ouro (apex), `--secondary` é platina (trabalho), `--destructive` é
terracota:

```css
:root {
  /* superfícies */
  --background: #030409;        /* canvas */
  --foreground: #F4F5F6;        /* on-surface */
  --card: #121419;              /* surface-container */
  --card-foreground: #F4F5F6;
  --popover: #1A1D22;           /* surface-container-high */
  --popover-foreground: #F4F5F6;
  /* metais */
  --primary: #E2C074;           /* ouro — apex/CTA único */
  --primary-foreground: #030409;
  --secondary: #C2C7CE;         /* platina — botão de trabalho */
  --secondary-foreground: #05070B;
  --muted: #1A1D22;
  --muted-foreground: #A7ABB2;
  --accent: #282A32;            /* grafite — hover/realce neutro */
  --accent-foreground: #F4F5F6;
  --destructive: #C77B72;       /* terracota — exclusões */
  --destructive-foreground: #1A0606;
  /* estrutura */
  --border: #2B2E34;
  --input: #2B2E34;
  --ring: #D4D8DD;              /* anel de foco platina */
  --radius: 0.375rem;           /* 6px base; sm 4 / lg 10 / xl 16 derivam daqui */
  /* tipografia */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Archivo", "Inter", sans-serif;
  --font-serif: "Source Serif 4", Georgia, serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* extras de marca (não-shadcn) */
  --gold-70: #ECD49A; --gold-50: #C9A24F; --gold-veil: #3A2F18;
  --platinum-90: #E9ECEF; --platinum-50: #9AA0A8; --platinum-30: #6B7178; --platinum-veil: #1A1D22;
  --success: #7FB08A; --warning: #D8B25A;
  --link: #C2C7CE; --overlay: rgb(3 4 9 / 0.72);
}

/* Tema claro de documento — aplicar em wrappers de peça/contrato/parecer */
.theme-document {
  --background: #F4F2EC;        /* alabastro */
  --foreground: #16181D;        /* tinta */
  --card: #FFFFFF;
  --card-foreground: #16181D;
  --muted: #ECEAE2;
  --muted-foreground: #5C5F66;
  --border: #D8D4C8;
  --input: #D8D4C8;
  --ring: #6B7178;
  --primary: #E2C074;           /* fill permanece; texto-sobre-fill = preto */
  --primary-foreground: #030409;
  /* para OURO COMO TEXTO sobre alabastro, use #7A5F2A (gold-30), não #E2C074 */
}
```

Notas de uso para o agente: aplicar `--font-display` (Archivo) em `h1–h3` e usar
`Archivo Expanded` + `text-transform: uppercase` + `letter-spacing: 0.22em` no
nameplate/wordmark; reservar `--primary` (ouro) a uma ação por tela; usar
`--secondary` (platina) como botão de trabalho com a sombra `raised-metal`;
manter `--radius` em 6px e cantos retos (`rounded-none`) em placas/documentos.
Os tokens deste front matter são normativos; este CSS é apenas a materialização
para a stack.
