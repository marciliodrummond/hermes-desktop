import { describe, expect, it } from "vitest";
import { t } from "./index";

describe("shared i18n", () => {
  it("returns the default-locale (pt-BR) text", () => {
    expect(t("welcome.title")).toBe("Bem-vindo ao SI Agent");
  });

  it("falls back to the key when an English key is missing", () => {
    expect(t("common.missingKey")).toBe("common.missingKey");
  });

  it("returns zh-CN text when available", () => {
    expect(t("welcome.title", "zh-CN")).toBe("欢迎使用 SI Agent");
  });

  it("returns zh-TW text when available", () => {
    expect(t("welcome.title", "zh-TW")).toBe("歡迎使用 SI Agent");
  });

  it("returns es text when available", () => {
    expect(t("welcome.title", "es")).toBe("Bienvenido a SI Agent");
  });

  it("returns id text when available", () => {
    expect(t("welcome.title", "id")).toBe("Selamat datang di SI Agent");
  });

  it("returns pl text when available", () => {
    expect(t("welcome.title", "pl")).toBe("Witamy w SI Agent");
  });

  it("falls back to en when zh-CN key is missing", () => {
    expect(t("nonExistent.fallbackKey", "zh-CN")).toBe(
      "nonExistent.fallbackKey",
    );
  });

  it("preserves interpolation placeholders in es", () => {
    expect(t("common.updateAvailable", "es", { version: "1.2.3" })).toBe(
      "Actualizar a v1.2.3",
    );
  });

  it("preserves interpolation placeholders in pl", () => {
    expect(t("common.updateAvailable", "pl", { version: "1.2.3" })).toBe(
      "Aktualizacja v1.2.3",
    );
  });
});
