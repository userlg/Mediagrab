import { describe, expect, it } from "vitest";
import { translations } from "../lib/translations";

describe("translations dictionary", () => {
  it("contains identical keys in both English and Spanish", () => {
    const keys = Object.keys(translations) as (keyof typeof translations)[];
    expect(keys.length).toBeGreaterThan(0);

    for (const key of keys) {
      expect(translations[key]).toHaveProperty("en");
      expect(translations[key]).toHaveProperty("es");
      expect(typeof translations[key].en).toBe("string");
      expect(typeof translations[key].es).toBe("string");
      expect(translations[key].en.length).toBeGreaterThan(0);
      expect(translations[key].es.length).toBeGreaterThan(0);
    }
  });
});
