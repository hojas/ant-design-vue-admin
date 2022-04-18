FROM node:16.14.2-alpine AS builder

WORKDIR /opt/app
COPY package.json .
COPY pnpm-lock.yaml .
RUN corepack enable && pnpm i


FROM node:16.14.2-alpine

WORKDIR /opt/app
COPY . .
COPY --from=builder /opt/app/node_modules ./node_modules
RUN corepack enable && pnpm run build

EXPOSE 3001
CMD pnpm run serve