/**
 * overlay/apply.ts — SI Agent white-label transform engine
 *
 * Uso:
 *   npx ts-node overlay/apply.ts [--dry-run] [--verify]
 *   npm run si:apply            (aplica)
 *   npm run si:verify           (verifica sem alterar)
 *
 * Principios:
 * - Determinístico: mesma entrada → mesma saída sempre.
 * - Idempotente: rodar 2× = rodar 1× (detecta se já está aplicado).
 * - Seguro: só escreve se a âncora (from) bater; conflito = registra e pula.
 * - --dry-run: mostra o que faria sem gravar nada.
 * - --verify: checa todos os asserts do manifesto e emite relatório.
 */

import { readFileSync, writeFileSync, existsSync, copyFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";

const ROOT = resolve(__dirname, "..");
const DRY_RUN = process.argv.includes("--dry-run");
const VERIFY_ONLY = process.argv.includes("--verify");

// ── Tipos ────────────────────────────────────────────────────────────────────

interface ApplyResult {
  applied: ApplyItem[];
  skipped_noop: ApplyItem[];
  conflicts: ConflictItem[];
  verify: VerifyResult[];
  verdict: "pass" | "fail" | "dry-run";
}

interface ApplyItem {
  file: string;
  action: string;
}

interface ConflictItem {
  file: string;
  expected_anchor: string;
  found: string;
}

interface VerifyResult {
  check: string;
  expected: string;
  found: string;
  pass: boolean;
}

const result: ApplyResult = {
  applied: [],
  skipped_noop: [],
  conflicts: [],
  verify: [],
  verdict: DRY_RUN ? "dry-run" : "pass",
};

// ── Utilitários ──────────────────────────────────────────────────────────────

function readFile(relPath: string): string {
  return readFileSync(join(ROOT, relPath), "utf-8");
}

function writeFile(relPath: string, content: string): void {
  if (DRY_RUN) {
    console.log(`[DRY-RUN] Would write: ${relPath}`);
    return;
  }
  writeFileSync(join(ROOT, relPath), content, "utf-8");
}

function fileHash(relPath: string): string {
  const abs = join(ROOT, relPath);
  if (!existsSync(abs)) return "";
  return createHash("md5").update(readFileSync(abs)).digest("hex");
}

/**
 * Substitui uma string em um arquivo de forma idempotente.
 * Se `from` não existe no arquivo mas `to` já existe → no-op (já aplicado).
 * Se nem `from` nem `to` existem → conflito (âncora sumiu).
 */
function replaceInFile(
  relPath: string,
  from: string,
  to: string,
  label: string,
): void {
  let content: string;
  try {
    content = readFile(relPath);
  } catch {
    result.conflicts.push({ file: relPath, expected_anchor: from, found: "(file not found)" });
    return;
  }

  if (content.includes(to) && !content.includes(from)) {
    // Já aplicado — no-op
    result.skipped_noop.push({ file: relPath, action: `${label} already applied` });
    return;
  }

  if (!content.includes(from)) {
    // Âncora não encontrada — conflito (upstream pode ter mudado)
    result.conflicts.push({ file: relPath, expected_anchor: from, found: "(anchor not found)" });
    return;
  }

  const updated = content.split(from).join(to);
  writeFile(relPath, updated);
  result.applied.push({ file: relPath, action: `${label}: "${from}" → "${to}"` });
}

// ── Asserts para --verify ────────────────────────────────────────────────────

function assert(check: string, expected: string, found: string): void {
  const pass = found.includes(expected);
  result.verify.push({ check, expected, found: found.slice(0, 120), pass });
  if (!pass) result.verdict = "fail";
}

function assertNotContains(check: string, forbidden: string, found: string): void {
  const pass = !found.includes(forbidden);
  result.verify.push({
    check,
    expected: `NOT: ${forbidden}`,
    found: pass ? "(not found — OK)" : `FOUND: ${forbidden}`,
    pass,
  });
  if (!pass) result.verdict = "fail";
}

// ── Transformações ───────────────────────────────────────────────────────────

function applyBrand(): void {
  console.log("\n[BRAND] Aplicando substituicoes de marca...");

  // electron-builder.yml
  replaceInFile("electron-builder.yml", "com.nousresearch.hermes", "org.superinteligencia.agent", "appId");
  replaceInFile("electron-builder.yml", "productName: Hermes One", "productName: SI Agent", "productName");
  replaceInFile("electron-builder.yml", "owner: fathah", "owner: marciliodrummond", "publish.owner");
  replaceInFile("electron-builder.yml", "vendor: Nous Research", "vendor: Super Inteligencia", "vendor");
  replaceInFile("electron-builder.yml", "maintainer: electronjs.org", "maintainer: Super Inteligencia", "maintainer");
  replaceInFile("electron-builder.yml",
    "Hermes One is a native desktop app for installing, configuring, and chatting",
    "SI Agent is a native desktop app for installing, configuring, and chatting",
    "description");

  // package.json
  replaceInFile("package.json", '"author": "fathah"', '"author": "Super Inteligencia"', "author");
  replaceInFile("package.json", '"homepage": "https://github.com/fathah/hermes-desktop"', '"homepage": "https://github.com/marciliodrummond/hermes-desktop"', "homepage");
  replaceInFile("package.json", '"description": "Hermes Agent Desktop — self-improving AI assistant"', '"description": "SI Agent Desktop — powered by Hermes Agent"', "description");

  // index.html
  replaceInFile("src/renderer/index.html", "<title>Hermes One</title>", "<title>SI Agent</title>", "window title");

  // main/index.ts
  replaceInFile("src/main/index.ts", 'app.setName("Hermes One")', 'app.setName("SI Agent")', "app.setName");
  replaceInFile("src/main/index.ts", 'electronApp.setAppUserModelId("com.nousresearch.hermes")', 'electronApp.setAppUserModelId("org.superinteligencia.agent")', "appUserModelId");
  replaceInFile("src/main/index.ts", 'title: "Hermes One",\n                body:', 'title: "SI Agent",\n                body:', "notification title");
  replaceInFile("src/main/index.ts", 'title: "Hermes One — Error"', 'title: "SI Agent — Error"', "notification error title");

  // i18n locales — appName
  const locales = ["en","es","id","ja","pl","pt-BR","pt-PT","tr","zh-CN","zh-TW"];
  for (const loc of locales) {
    replaceInFile(
      `src/shared/i18n/locales/${loc}/common.ts`,
      'appName: "Hermes One"',
      'appName: "SI Agent"',
      `i18n/${loc} appName`,
    );
  }

  // useLocalCommands version display
  replaceInFile(
    "src/renderer/src/screens/Chat/hooks/useLocalCommands.ts",
    "**Hermes One:** v",
    "**SI Agent:** v",
    "version command display",
  );
}

function applyLocale(): void {
  console.log("\n[LOCALE] Configurando pt-BR como padrao...");
  replaceInFile(
    "src/shared/i18n/config.ts",
    'export const FALLBACK_LOCALE: AppLocale = "en"',
    'export const FALLBACK_LOCALE: AppLocale = "pt-BR"',
    "FALLBACK_LOCALE",
  );
  replaceInFile(
    "src/shared/i18n/config.ts",
    'export const DEFAULT_ACTIVE_LOCALE: AppLocale = "en"',
    'export const DEFAULT_ACTIVE_LOCALE: AppLocale = "pt-BR"',
    "DEFAULT_ACTIVE_LOCALE",
  );
}

function applyTelemetry(): void {
  console.log("\n[TELEMETRY] Verificando neutralizacao do PostHog...");
  const analyticsPath = "src/renderer/src/utils/analytics.ts";
  const content = readFile(analyticsPath);

  if (content.includes("posthog.init(")) {
    // Ainda tem o init ativo — substituir com stub
    const stub = `/**
 * Analytics — SI Agent white-label overlay
 * PostHog neutralizado: init nunca roda, nenhum evento e enviado.
 */

export function initAnalytics(): void { /* no-op: PostHog desativado */ }
export function capture(_event: string, _properties?: Record<string, unknown>): void { /* no-op */ }
export function captureScreenView(_screen: string): void { /* no-op */ }
export function captureFeatureUsage(_feature: string, _details?: Record<string, unknown>): void { /* no-op */ }
export function getAnalyticsConsent(): boolean { return false; }
export function setAnalyticsConsent(_enabled: boolean): void { /* no-op */ }
export function resetAnalytics(): void { /* no-op */ }
`;
    writeFile(analyticsPath, stub);
    result.applied.push({ file: analyticsPath, action: "PostHog stub applied" });
  } else if (!content.includes("posthog")) {
    result.skipped_noop.push({ file: analyticsPath, action: "PostHog already neutralized (no-op)" });
  } else {
    result.skipped_noop.push({ file: analyticsPath, action: "PostHog stub already in place" });
  }
}

function applyUpdateFeed(): void {
  console.log("\n[UPDATE_FEED] Configurando feed de update para fork...");
  // Já coberto por applyBrand() → owner: fathah → marciliodrummond
  // Este metodo e mantido para explicitude no manifesto
  const content = readFile("electron-builder.yml");
  if (content.includes("owner: marciliodrummond")) {
    result.skipped_noop.push({ file: "electron-builder.yml", action: "update feed already points to fork" });
  } else {
    replaceInFile("electron-builder.yml", "owner: fathah", "owner: marciliodrummond", "update feed owner");
  }
}

function applyDefaultThemes(): void {
  console.log("\n[THEMES] Configurando temas SI como padrao...");
  replaceInFile(
    "src/renderer/src/constants.ts",
    'export const DEFAULT_DARK_THEME = "dark"',
    'export const DEFAULT_DARK_THEME = "si-dark"',
    "DEFAULT_DARK_THEME",
  );
  replaceInFile(
    "src/renderer/src/constants.ts",
    'export const DEFAULT_LIGHT_THEME = "light"',
    'export const DEFAULT_LIGHT_THEME = "si-light"',
    "DEFAULT_LIGHT_THEME",
  );
}

// ── Verify ───────────────────────────────────────────────────────────────────

function runVerify(): void {
  console.log("\n[VERIFY] Executando asserts...\n");

  // 1. productName + appId
  const builderYml = readFile("electron-builder.yml");
  assert("electron-builder.yml: productName=SI Agent", "productName: SI Agent", builderYml);
  assert("electron-builder.yml: appId=org.superinteligencia.agent", "org.superinteligencia.agent", builderYml);
  assert("electron-builder.yml: author=Super Inteligencia", "vendor: Super Inteligencia", builderYml);
  assert("electron-builder.yml: update feed → marciliodrummond", "owner: marciliodrummond", builderYml);

  // 2. package.json
  const pkg = readFile("package.json");
  assert("package.json: author=Super Inteligencia", '"Super Inteligencia"', pkg);
  assert("package.json: homepage → fork", "marciliodrummond", pkg);

  // 3. Titulo da janela
  const indexHtml = readFile("src/renderer/index.html");
  assert("index.html: title=SI Agent", "<title>SI Agent</title>", indexHtml);

  // 4. main/index.ts
  const mainTs = readFile("src/main/index.ts");
  assert("main/index.ts: app.setName SI Agent", 'app.setName("SI Agent")', mainTs);
  assert("main/index.ts: appUserModelId org.superinteligencia.agent", "org.superinteligencia.agent", mainTs);
  assertNotContains("main/index.ts: NO Hermes One notification title", '"Hermes One"', mainTs);

  // 5. Locale pt-BR
  const i18nConfig = readFile("src/shared/i18n/config.ts");
  assert("i18n/config.ts: DEFAULT_ACTIVE_LOCALE=pt-BR", '"pt-BR"', i18nConfig);
  assert("i18n/config.ts: FALLBACK_LOCALE=pt-BR", 'FALLBACK_LOCALE: AppLocale = "pt-BR"', i18nConfig);

  // 6. PostHog morto
  const analytics = readFile("src/renderer/src/utils/analytics.ts");
  assertNotContains("analytics.ts: NO posthog.init", "posthog.init(", analytics);
  assertNotContains("analytics.ts: NO import posthog-js", 'import posthog from "posthog-js"', analytics);

  // 7. DESIGN.md presente
  const designMdExists = existsSync(join(ROOT, "DESIGN.md"));
  result.verify.push({
    check: "DESIGN.md present at repo root",
    expected: "file exists",
    found: designMdExists ? "file exists" : "NOT FOUND",
    pass: designMdExists,
  });
  if (!designMdExists) result.verdict = "fail";

  // 8. CSS do DS injetado
  const mainCss = readFile("src/renderer/src/assets/main.css");
  assert("main.css: DS :root com --background token", "--background: #030409", mainCss);
  assert("main.css: DS si-dark theme block", '[data-theme="si-dark"]', mainCss);
  assert("main.css: DS si-light theme block", '[data-theme="si-light"]', mainCss);
  assert("main.css: Google Fonts import (Archivo)", "family=Archivo", mainCss);

  // 9. Assets SI presentes
  const assetChecks = [
    "src/renderer/src/assets/brand/si-icon.png",
    "src/renderer/src/assets/brand/si-logo-dark.png",
    "src/renderer/src/assets/brand/si-logo-light.png",
    "build/icon.png",
    "build/icon.ico",
  ];
  for (const asset of assetChecks) {
    const exists = existsSync(join(ROOT, asset));
    result.verify.push({
      check: `asset present: ${asset}`,
      expected: "file exists",
      found: exists ? `exists (${statSync(join(ROOT, asset)).size} bytes)` : "NOT FOUND",
      pass: exists,
    });
    if (!exists) result.verdict = "fail";
  }

  // 10. SplashScreen usa logo SI
  const splashTs = readFile("src/renderer/src/screens/SplashScreen/SplashScreen.tsx");
  assert("SplashScreen: imports si-logo-dark", "si-logo-dark.png", splashTs);
  assertNotContains("SplashScreen: NO hermes-one.svg", "hermes-one.svg", splashTs);

  // 11. HermesLogo usa si-icon
  const hermesLogoTs = readFile("src/renderer/src/components/common/HermesLogo.tsx");
  assert("HermesLogo: imports si-icon", "si-icon.png", hermesLogoTs);

  // 12. DEFAULT themes = si-dark / si-light
  const constants = readFile("src/renderer/src/constants.ts");
  assert("constants.ts: DEFAULT_DARK_THEME=si-dark", 'DEFAULT_DARK_THEME = "si-dark"', constants);
  assert("constants.ts: DEFAULT_LIGHT_THEME=si-light", 'DEFAULT_LIGHT_THEME = "si-light"', constants);

  // Print results
  const passed = result.verify.filter((v) => v.pass).length;
  const failed = result.verify.filter((v) => !v.pass).length;
  console.log(`\nAsserts: ${passed} passed, ${failed} failed\n`);
  for (const v of result.verify) {
    const icon = v.pass ? "[OK]" : "[FAIL]";
    console.log(`  ${icon} ${v.check}`);
    if (!v.pass) console.log(`       expected: ${v.expected}\n       found:    ${v.found}`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main(): void {
  console.log(`\n=== SI Agent overlay/apply.ts ===`);
  console.log(`Mode: ${DRY_RUN ? "DRY-RUN" : VERIFY_ONLY ? "VERIFY" : "APPLY"}`);
  console.log(`Root: ${ROOT}\n`);

  if (!VERIFY_ONLY) {
    applyBrand();
    applyLocale();
    applyTelemetry();
    applyUpdateFeed();
    applyDefaultThemes();
  }

  runVerify();

  // Write report
  const reportPath = join(ROOT, "overlay", "apply-report.json");
  if (!DRY_RUN) {
    writeFileSync(reportPath, JSON.stringify(result, null, 2), "utf-8");
    console.log(`\nReport written to overlay/apply-report.json`);
  }

  const failCount = result.conflicts.length + result.verify.filter((v) => !v.pass).length;
  if (failCount > 0) {
    console.log(`\n[WARN] ${failCount} issue(s) found.`);
    console.log(`Conflicts: ${result.conflicts.length}`);
    for (const c of result.conflicts) {
      console.log(`  - ${c.file}: anchor "${c.expected_anchor}" not found (${c.found})`);
    }
    process.exit(VERIFY_ONLY ? 1 : 0); // verify falha; apply nao sai com erro (parcial OK)
  } else {
    console.log(`\n[OK] All checks passed. Verdict: ${result.verdict}`);
  }
}

main();
