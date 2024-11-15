FROM node:23.1.0-alpine

WORKDIR /manna
COPY . /manna
RUN npm install -g pnpm
RUN pnpm install
CMD ["pnpm", "dev", "--host"]
EXPOSE 5173