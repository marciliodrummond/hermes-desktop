# HANDOFF — SI Agent (white-label de hermes-desktop)

> Documento de contexto para retomar o projeto em uma nova sessão.
> Última atualização: 2026-06-17 · Branch: `si/onda1` · Versão: `0.7.1`.
> Leia também o `CLAUDE.md` (diretrizes resumidas e sempre carregadas).

---

## 1. O que é o projeto

- App **Electron desktop** "SI Agent" — fork **white-label** de `fathah/hermes-desktop`.
  Por baixo, roda o agente "Hermes Agent" (CLI `hermes`, instalado em `~/.hermes`).
- **Só a marca do desktop é "SI Agent".** O *encanamento* (CLI, binário, paths, código)
  continua `hermes` por necessidade funcional — ver regra de debranding abaixo.
- **Repo:** `github.com/marciliodrummond/hermes-desktop`
  (`origin` = fork do dono; `upstream` = `fathah/hermes-desktop`).
- **Branch de trabalho:** `si/onda1`. **Versão atual:** `0.7.1`.
- Stack: electron-vite + React 19 + Tailwind v4 + electron-builder + i18next/react-i18next.

---

## 2. Diretrizes vigentes (as regras a seguir)

### 2.1 Visual
`DESIGN.md` é a **fonte de verdade** (Design System "Centurion"): dark-first (preto
absoluto `#030409`), dois metais (platina `#C2C7CE` no dia a dia, ouro `#E2C074` só
no CTA único/valores), zero gradiente saturado, zero emoji, zero estética de IDE.
Fontes: Archivo (display), Inter (corpo/UI), Source Serif 4 (editorial), JetBrains Mono (dados).

### 2.2 Debranding (REGRA ATUAL — substitui a antiga)
Toda menção **visível ao usuário** a "Hermes"/"Hermes One"/"Hermes Agent" → **"SI Agent"**.
**Preservar só o funcional** (não é marca; quebraria o app): CLI `hermes`, `~/.hermes`,
pasta/binário/repo `hermes-agent` (+ URLs/comandos de instalação), identificadores de
código (`window.hermesAPI`, `HermesLogo`, `getHermesHome`…), nomes de **chave** i18n
(`installingHermes`, `migrateToHermes`) e de arquivo (`gateway-stderr.log`).
> A regra anterior (preservar "Hermes Agent" como marca interna visível) foi **revertida**
> em 2026-06 a pedido do dono (licenciado).

### 2.3 Idioma (pt-BR)
- **pt-BR é o padrão** (`DEFAULT_ACTIVE_LOCALE` em `src/shared/i18n/config.ts`).
- Copy **intuitiva**, não literal; clara para leigos; rótulos de ação no infinitivo
  ("Usar o computador", "Rodar código").
- **Paridade total** de chaves pt-BR ↔ en (chave faltando aparece **crua** na tela).
- Glossário: Chat=Conversa · Sessions=Histórico · Gateway=**Conexões** · Skills=Habilidades ·
  Soul=Personalidade · Tools=Ferramentas · Schedules=Agendamentos · Kanban=Quadro ·
  Discover=Explorar · Diagnose=Diagnóstico · Providers=Provedores · Office=Escritório ·
  Settings=Configurações · Profiles=Perfis.
- **i18n carrega no STARTUP:** mudanças em locale só aparecem ao **reiniciar** o app
  (Ctrl+R/HMR não basta — as resources são montadas na inicialização).

---

## 3. O que já foi feito

### Onda 1 (base do rebrand — já estava no repo no início)
`DESIGN.md`, `overlay/` (manifest + apply.ts), temas `si-dark`/`si-light` (definidos como
padrão), assets de marca iniciais, `build/icon.{ico,png}`, `electron-builder.yml`
(`productName: SI Agent`, `appId: org.superinteligencia.agent`), `DEFAULT_ACTIVE_LOCALE = pt-BR`.

### Onda 2
- **pt-BR passou a funcionar de fato.** O app abria em inglês porque
  `~/.hermes/desktop.json` tinha `{"locale":"en"}` (resíduo da era Hermes, cujo default era en).
  Resetado para `pt-BR`. (Instalações novas já pegam pt-BR; quem vem do Hermes mantém o salvo.)
- **Logos SI:** menu/sidebar (SVG wide `si-logo-menu.svg`), centro da Conversa
  (`si-logo-chat.svg`, dentro de um badge redondo), avatar do agente nas mensagens
  (`si-icon.png`), ícone do app (`resources/icon.png`), `build/icon.icns` (gerado com
  `npx png2icons`), e a logo na parede do **Escritório 3D**.
- **Fontes self-hosted** via `@fontsource` (Archivo/Inter/Source Serif 4/JetBrains Mono);
  removido o `@import` do Google Fonts (era bloqueado pela CSP estrita). CSP segue estrita.
- **Gateway → Conexões** em toda a interface pt-BR.
- **pt-BR completo + intuitivo + QA:** reescrita das telas + completar lacunas (paridade
  com en) + passada de QA (rótulos de ação). Criados 3 namespaces que faltavam:
  `discover`, `kanban`, `diagnose`.
- **Habilidades em pt-BR:** descrições das ~73 skills embutidas via mapa
  `src/renderer/src/data/skillDescriptionsPtBR.ts` (os **nomes** das skills, técnicos,
  ficam como estão; só a descrição é traduzida no render — `Skills.tsx`).

### Debranding (mais recente)
Todas as strings visíveis "Hermes" → "SI Agent" nos **10 idiomas** + 4 strings de código
(`App.tsx` erro de conexão remota, `RemoteNotice.tsx`, `transcriptUtils.ts` rótulo do
transcript, `skillDescriptionsPtBR.ts`). Testes atualizados (inclui alinhar os testes de
locale ao padrão pt-BR).

### Deploy / Release
- `.github/workflows/release.yml` ajustado para **Windows + Linux** (job macOS **removido**
  — exigia segredos de assinatura Apple que o fork não tem; passo winget removido; título
  do GitHub Release = "SI Agent").
- **Releases publicados:** `v0.7.0` e `v0.7.1` (este com o debranding). Auto-update via
  `latest.yml` (Win) e `latest-linux.yml`.
- **Pegadinha de fork:** os workflows de um fork ficam desativados até o dono clicar
  "I understand my workflows…" na aba Actions (não há API). Já foi habilitado.

---

## 4. O que falta / TODO

- [ ] **Logo do menu no tema CLARO.** A `si-logo-menu.svg` renderiza **branca**
  (filtro `feColorMatrix`) — perfeita no tema escuro (padrão), invisível no claro.
  No tema claro o `Layout.tsx` usa `si-logo-light.png` (quase-quadrada). Pedir/criar uma
  versão **escura, wide (~5:1)** para o tema claro e ligá-la.
- [ ] **Otimizar assets de marca** (peso): `si-logo-menu.svg` (~653 KB) e
  `si-logo-chat.svg` (~456 KB) embutem PNGs raster; `si-icon.png` 0,92 MB,
  `si-logo-dark.png` 2 MB. Redimensionar/comprimir.
- [ ] **macOS builds:** se quiser distribuir pra Mac, re-adicionar o job `release_mac` no
  `release.yml` + configurar segredos Apple (`ASC_API_KEY`, `CSC_LINK`, `CSC_KEY_PASSWORD`,
  `ASC_KEY_ID`, `ASC_ISSUER_ID`).
- [ ] **Splash (`startvid.mp4`):** o vídeo de fundo do splash pode ainda conter marca
  Hermes — não é editável facilmente; recriar se for um problema.
- [ ] **Migração de locale para quem vem do Hermes:** upgraders mantêm o locale salvo (en);
  instalações novas = pt-BR. Avaliar uma migração one-time para pt-BR.
- [ ] **Assets órfãos** (não renderizados, podem ser removidos): `assets/hermes-one.svg`,
  `assets/hermes.png`, `assets/icon.png` (o do renderer), `assets/splash.png`,
  `assets/splashtext.png`.
- [ ] **Teste flaky:** `tests/gateway-restart.test.ts` ("falls back to a native restart…")
  é instável (timing); passa isolado, falha sob carga da suíte. **Não** bloqueia build/release
  (a CI roda `npm run build`, não `npm test`). Investigar/estabilizar se incomodar.
- [ ] **Confirmar `v0.7.1` publicado e o auto-update** chegando nas instâncias.
- [ ] **Outros idiomas:** lacunas/qualidade menores fora do pt-BR (foco é pt-BR).

---

## 5. Runbook (como fazer as coisas)

- **Rodar o app (dev):** `npm run dev` na raiz do projeto. Lembre: i18n carrega no
  startup → reinicie o app para ver mudanças de tradução.
- **Verificar:** `npm run build` (typecheck + bundle). **Não** rode com `npm run dev`
  aberto (ambos escrevem em `out/`). Testes: `npm test` (vitest).
- **Paridade i18n (pt-BR↔en):** script Node que faz `eval` de cada `export default {...}`
  e compara os caminhos de chave (usado várias vezes nesta sessão; recriar conforme preciso).
- **Publicar release:** suba `version` no `package.json` (> última tag), commit+push em
  `si/onda1`, depois
  `gh workflow run release.yml -R marciliodrummond/hermes-desktop --ref si/onda1 -f dry_run=true`
  (valida) e/ou `... -f dry_run=false` (publica + auto-update). Acompanhar com
  `gh run watch <id> -R marciliodrummond/hermes-desktop --exit-status`.
- **Debrandar nova string:** marca visível → "SI Agent"; preservar funcional
  (`hermes` CLI/path/binário, código, comandos, nomes de chave/arquivo).

---

## 6. Arquivos-chave

| Área | Arquivos |
|---|---|
| Marca/guia | `CLAUDE.md`, `DESIGN.md`, `HANDOFF.md`, `overlay/` |
| Release | `.github/workflows/release.yml`, `electron-builder.yml`, `package.json` |
| i18n | `src/shared/i18n/config.ts` (default pt-BR), `index.ts` (resources), `locales/<lang>/*.ts` |
| Logos/telas | `src/renderer/src/screens/Layout/Layout.tsx` (menu), `Chat/ChatEmptyState.tsx` (centro), `Chat/MessageRow.tsx` (avatar), `screens/Office/office3d/objects/OfficeShell.tsx` |
| Assets de marca | `src/renderer/src/assets/brand/` (`si-icon`, `si-logo-dark/light/menu/chat`) |
| Skills pt-BR | `src/renderer/src/data/skillDescriptionsPtBR.ts`, `screens/Skills/Skills.tsx` |
| Backend (NÃO mexer na marca interna) | `src/main/installer.ts`, `hermes.ts`, `hermes-auth.ts`, `config.ts` |

---

## 7. Histórico de commits (Onda 2 + debranding, em `si/onda1`)

```
bee2cc7  feat(onda2): pt-BR intuitivo completo, logos SI e fontes self-hosted
6ee0b47  chore(release): bump version to 0.7.0 (Onda 2)
115f91f  polish(i18n): QA do pt-BR — rótulos de ação e naturalidade
9f2be2f  feat(i18n): descrições das Habilidades em pt-BR (nomes mantidos)
4bff506  feat(brand): logo SI na parede do Escritório 3D
(release v0.7.0 publicado pela CI)
da2cab6  feat(brand): remove menções visíveis a "Hermes"/"Hermes One" — tudo "SI Agent"
(+ ci(release): release Windows+Linux sem dependência de assinatura Apple)
(+ bump 0.7.1 + release v0.7.1)
```
