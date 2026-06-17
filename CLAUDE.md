# SI Agent — Guia para Claude Code

Este repositorio e o fork white-label "SI Agent" do upstream fathah/hermes-desktop.

> **Retomando o projeto?** Leia **[HANDOFF.md](HANDOFF.md)** primeiro — contexto
> completo: o que ja foi feito, as diretrizes vigentes e o que ainda falta.

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

## Marca e debranding (regra vigente)

Toda mencao VISIVEL AO USUARIO a "Hermes", "Hermes One" ou "Hermes Agent" deve
ser **"SI Agent"** (o dono e licenciado). Nao deixe vestigios da marca Hermes na
interface — telas, textos, notificacoes, transcript exportado, descricoes.

PRESERVE apenas o que e FUNCIONAL (encanamento; nao e marca e quebraria o app):
- CLI `hermes` e caminho `~/.hermes`
- Pasta/binario/repo `hermes-agent` (e as URLs/comandos de instalacao que o citam)
- Identificadores de codigo: `window.hermesAPI`, `HermesLogo`, `getHermesHome`, etc.
- Nomes de CHAVE i18n (`installingHermes`, `migrateToHermes`) e de arquivo (`gateway-stderr.log`)
- Backend (hermes.ts, hermes-auth.ts, installer.ts): logica e tipos.

Resumo: o **produto** e "SI Agent" em tudo que o usuario le; o **encanamento**
continua `hermes` por baixo. (A regra anterior preservava "Hermes Agent" visivel —
foi REVERTIDA em 2026-06 a pedido do dono.)

## Idioma (pt-BR)

- pt-BR e o PADRAO (`DEFAULT_ACTIVE_LOCALE` em `src/shared/i18n/config.ts`).
- Copy INTUITIVA (nao traducao literal), clara para leigos; rotulos de acao no
  infinitivo ("Usar o computador", "Rodar codigo").
- Manter PARIDADE TOTAL de chaves pt-BR <-> en (chave faltando aparece crua na tela).
- Glossario: Chat=Conversa, Sessions=Historico, Gateway=Conexoes, Skills=Habilidades,
  Soul=Personalidade, Tools=Ferramentas, Schedules=Agendamentos, Kanban=Quadro,
  Discover=Explorar, Diagnose=Diagnostico, Providers=Provedores, Office=Escritorio,
  Settings=Configuracoes, Profiles=Perfis.
- i18n carrega no STARTUP: mudancas em locale so aparecem ao REINICIAR o app (HMR nao basta).

## Deploy (release)

- Release pela GitHub Actions `.github/workflows/release.yml` (**Windows+Linux**; o job
  macOS foi removido por exigir segredos Apple). Branch de trabalho: `si/onda1`.
- Publicar: suba `version` no package.json (acima da ultima tag), commit+push, e
  `gh workflow run release.yml -R marciliodrummond/hermes-desktop --ref si/onda1 -f dry_run=false`
  (dry_run=true so builda; false cria a tag, publica e liga o auto-update).
- Build local: `npm run build` (NAO com o `npm run dev` aberto — ambos usam `out/`), `npm test`.

## Overlay

O diretorio `overlay/` contem o manifesto declarativo (`manifest.json`) e o
script de reaplicacao (`apply.ts`) para atualizar a marca quando o upstream
lancar novas versoes.
