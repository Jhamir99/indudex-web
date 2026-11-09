import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "ca"],
  defaultLocale: "en",
  localePrefix: {
    mode: "always",
    // "cat" is not a valid language tag, so the locale stays "ca" (used by Intl
    // and <html lang>) while the URL keeps the legacy site's /cat prefix.
    prefixes: {
      ca: "/cat",
    },
  },
});
