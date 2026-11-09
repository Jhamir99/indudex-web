import createClient from "openapi-fetch";
import type { paths } from "./schema";

// The only client for indudex-api. Types come from its OpenAPI spec:
// regenerate them with `npm run api:types` after the API changes.
export const api = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
});
