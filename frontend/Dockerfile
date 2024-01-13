ARG NODE_VERSION=20.9.0

# Stage 1 - Install dependencies and build app
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY public/ ./public/
COPY src/ ./src/
COPY .eslintrc.json next.config.js postcss.config.js tailwind.config.js tsconfig.json ./

RUN npm run build

# Stage 2 - Run the app

FROM node:${NODE_VERSION}-alpine
WORKDIR /app

ENV NODE_ENV=production

RUN mkdir .next
COPY --from=builder /app/public/ ./public/
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

CMD ["node", "server.js"]
