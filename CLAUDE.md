# SI Agent — Guia para Claude Code

Este repositorio e o fork white-label "SI Agent" do upstream fathah/hermes-desktop.

## Regra visual obrigatoria

**Siga DESIGN.md para todas as decisoes visuais.** O arquivo DESIGN.md na raiz
contem o Design System Empresarial 360 "Centurion" — a fonte de verdade para
cores, tipografia, espacamentos, elevacao, componentes e theming deste app.

Principais pontos:
- Dark-first: o canvas e preto absoluto (#030409), nao cinza.
- Dois metais com papeis fixos: platina (#C2C7CE) e o trabalho diario; ouro
  (#E2C074) e o apex — reservado ao CTA unico por contexto e a numeros de valor.
- Zero gradiente saturado, zero emoji na UI, zero estetica de terminal/IDE.
- Texto: off-white frio (#F4F5F6) no escuro; tinta (#16181D) sobre alabastro.
- Fontes: Archivo (display/headlines), Inter (corpo/UI), Source Serif 4 (editorial),
  JetBrains Mono (dados/numeros/eyebrows).

## Preservar o agente

NaO renomeie nem altere nada relacionado ao agente subjacente:
- CLI `hermes` e paths `~/.hermes`
- Binario `hermes-agent`
- Constantes internas `Hermes Agent` (distintas de "Hermes One"/"Hermes Desktop")
- Importacoes e tipos de backend (hermes-auth, hermes.ts, installer.ts, etc.)

Somente a **marca do desktop** e "SI Agent". O agente continua sendo "Hermes Agent".

## Overlay

O diretorio `overlay/` contem o manifesto declarativo (`manifest.json`) e o
script de reaplicacao (`apply.ts`) para atualizar a marca quando o upstream
lancar novas versoes.
