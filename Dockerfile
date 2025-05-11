FROM nikolaik/python-nodejs:python3.12-nodejs22-slim

RUN corepack enable pnpm

WORKDIR /app

COPY . .

RUN uv sync

RUN cd web && pnpm install
RUN cd web && pnpm build

RUN chmod +x bootstrap.sh

EXPOSE 8000
EXPOSE 3000

CMD ["./bootstrap.sh"]