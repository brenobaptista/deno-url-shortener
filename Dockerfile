FROM denoland/deno:alpine-1.25.3

WORKDIR /app

COPY . .

CMD ["deno", "task", "start"]
