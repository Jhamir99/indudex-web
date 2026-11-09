# syntax=docker/dockerfile:1

# Runs `next start` rather than Next's `output: "standalone"` server: with
# standalone, next-intl's /cat -> /ca rewrite is re-run as an external request
# when the Host is a real domain, and /cat ends up redirected to /en/ca.

FROM node:26-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# NEXT_PUBLIC_* values are inlined into the browser bundle at build time,
# so the API URL must be passed as a build argument, not at runtime.
ARG NEXT_PUBLIC_API_URL=http://localhost:4000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:26-alpine AS prod-deps
WORKDIR /app
COPY package.json package-lock.json ./
# --ignore-scripts skips "prepare" (husky), which is a dev-only tool.
RUN npm ci --omit=dev --ignore-scripts

FROM node:26-alpine AS run
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
COPY --from=prod-deps --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/package.json /app/next.config.ts ./
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 3000
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
