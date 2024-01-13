ARG NODE_VERSION=20.9.0

# Stage 1 - Install dependencies and build app
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

# Stage 2 - Run the app
FROM node:${NODE_VERSION}
WORKDIR /app

COPY gtfsrt.proto ./
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/dist/ ./

CMD ["node", "/app/index.js"]
