FROM node:16.14.2-alpine AS builder

WORKDIR /opt/app
COPY package.json .
COPY pnpm-lock.yaml .
RUN corepack enable
RUN pnpm i


FROM node:16.14.2-alpine

WORKDIR /opt/app
COPY . .
COPY --from=builder /opt/app/node_modules ./node_modules
RUN corepack enable
RUN pnpm run build

WORKDIR /opt/app/dist
RUN mkdir ./admin
RUN mv assets ./admin && mv favicon.ico ./admin && mv index.html ./admin
RUN cp ./admin/index.html ./404.html
RUN npm i -g http-server

EXPOSE 3001
CMD http-server . -p 3001 -i
