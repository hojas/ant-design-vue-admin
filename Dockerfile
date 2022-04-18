FROM node:16.14.2-alpine AS builder

WORKDIR /root/app
COPY . .
RUN corepack enable
RUN pnpm i && pnpm run build


FROM nginx:1.20.2-alpine

WORKDIR /usr/share/nginx/html/admin
COPY --from=builder /root/app/dist .
RUN mv index.html ..
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
