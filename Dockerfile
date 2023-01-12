FROM node:18.13.0-alpine AS builder

WORKDIR /opt/app
COPY package.json .
COPY pnpm-lock.yaml .
RUN corepack enable && pnpm i


FROM node:18.13.0-alpine

WORKDIR /opt/app
COPY . .
COPY --from=builder /opt/app/node_modules ./node_modules
RUN corepack enable && pnpm run build

EXPOSE 3000
CMD pnpm run serve
