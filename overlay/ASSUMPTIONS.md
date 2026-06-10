# Premissas assumidas — Onda 1

## 1. Google Fonts via CSP
O index.html tem uma CSP que restringe `connect-src 'self' blob:`. O @import de
Google Fonts no CSS requer que `fonts.googleapis.com` e `fonts.gstatic.com`
estejam na CSP, ou que as fontes sejam auto-hospedadas. **Premissa**: fontes do
Google Fonts ja estao carregando via `@import` no main.css; se a CSP bloquear,
a UI caira para a stack de fallback (Inter/system-ui) sem quebrar o app. O load
correto de fontes sera validado visualmente pelo gate da Onda 2.

Acao futura: ou relaxar a CSP para `connect-src ... https://fonts.googleapis.com
https://fonts.gstatic.com` em src/main/index.ts (session CSP handler), ou
empacotar as 4 fontes em src/renderer/src/assets/fonts/ como nos moldes da
Manrope existente.

## 2. Logo no sidebar — de mask SVG para img
O upstream usa a abordagem CSS mask-image com um SVG monocromatico para colorir
o logo via CSS (`--primary-yellow`). Os logos SI sao PNGs coloridos que nao
funcionam com mask. Substituida a abordagem por `<img>` com condicional de tema.
O CSS `.sidebar-logo` do upstream (height:30, width:150, mask-*) foi mantido no
arquivo mas sera ignorado pelo elemento `<img>` (que usa style inline).

Acao futura: limpar o CSS `.sidebar-logo` obsoleto na Onda 2.

## 3. build/icon.icns nao regenerado
O arquivo `build/icon.icns` existente (do upstream) foi mantido. O formato ICNS
requer ferramentas macOS (iconutil) ou libicns. Como o ambiente de build e
Windows, a regeneracao do ICNS nao e possivel sem ferramentas adicionais.

Acao futura: regenerar build/icon.icns em um runner macOS na CI, ou usar
`electron-icon-builder` no pipeline de release.

## 4. Fontes SI nao empacotadas localmente
As 4 fontes do DS (Archivo, Inter, Source Serif 4, JetBrains Mono) sao carregadas
via Google Fonts. O Electron em modo offline nao tera acesso a elas. A fonte de
corpo Inter ja e uma fonte do sistema em muitas plataformas; Archivo e JetBrains
Mono nao sao. Para o build de producao recomenda-se empacotar as fontes localmente.

## 5. Modo offline / Electron renderer
O Electron renderer tem acesso a internet por padrao. A menos que o usuario esteja
offline, os Google Fonts carregarao normalmente. Nenhuma configuracao adicional de
rede e necessaria para o desenvolvimento.

## 6. dark/light ligados ao sistema de temas existente
O toggle dark/light ja existe no app (ThemeProvider + ThemeSwitcher na sidebar).
Os temas si-dark e si-light foram adicionados ao registro de temas e definidos
como DEFAULT_DARK_THEME / DEFAULT_LIGHT_THEME. O usuario pode trocar para qualquer
outro tema existente (Dracula, Nord, etc.) — o sistema de persistencia via
localStorage ja funciona para todos eles.

## 7. Strings internas "Hermes Agent" nao substituidas
Strings como "Hermes Agent" em comentarios internos, mensagens de log e em
hermes.ts/hermes-auth.ts foram deliberadamente preservadas conforme instrucao
do brief. Somente as strings de UI visiveis ao usuario final foram alteradas.
