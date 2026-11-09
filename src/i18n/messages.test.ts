import { describe, expect, it } from "vitest";
import en from "../../messages/en.json";
import es from "../../messages/es.json";
import ca from "../../messages/ca.json";

function keysOf(messages: object, prefix = ""): string[] {
  return Object.entries(messages).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === "object" && value !== null
      ? keysOf(value, path)
      : [path];
  });
}

describe("translations", () => {
  const englishKeys = keysOf(en).sort();

  it.each([
    ["es", es],
    ["ca", ca],
  ])("%s has exactly the same keys as en", (_locale, messages) => {
    expect(keysOf(messages).sort()).toEqual(englishKeys);
  });
});
