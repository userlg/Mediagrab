import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "../hooks/useLanguage";
import type { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("useLanguage hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("defaults to English when no valid preference is saved", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe("en");
    expect(result.current.t("download")).toBe("Download");
  });

  it("allows switching language to Spanish and persists in localStorage", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    act(() => {
      result.current.setLang("es");
    });

    expect(result.current.lang).toBe("es");
    expect(result.current.t("download")).toBe("Descargar");
    expect(localStorage.getItem("mediagrab:lang")).toBe("es");
  });

  it("loads stored language from localStorage on initial render", () => {
    localStorage.setItem("mediagrab:lang", "es");
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe("es");
    expect(result.current.t("tabPlatforms")).toBe("Plataformas");
  });

  it("throws error when used outside of LanguageProvider", () => {
    expect(() => {
      renderHook(() => useLanguage());
    }).toThrow("useLanguage debe usarse dentro de LanguageProvider");
  });
});
