import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("api client", () => {
  it("calls the API at NEXT_PUBLIC_API_URL and returns typed data", async () => {
    vi.stubEnv("NEXT_PUBLIC_API_URL", "https://api.example.test");
    const fetchMock = vi.fn<(request: Request) => Promise<Response>>(
      async () => Response.json({ status: "ok" }),
    );
    vi.stubGlobal("fetch", fetchMock);

    // Imported after the stubs, because the client reads them when created.
    const { api } = await import("./client");
    const { data } = await api.GET("/health");

    expect(data).toEqual({ status: "ok" });
    const [request] = fetchMock.mock.calls[0];
    expect(request.url).toBe("https://api.example.test/health");
  });
});
