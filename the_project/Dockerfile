FROM node:26-bookworm-slim AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY .env tsconfig.json ./
COPY src ./src

RUN npm run build

FROM node:26-bookworm-slim

WORKDIR /app

COPY --from=build /app/package.json .

RUN npm install

COPY --from=build /app/dist ./dist

CMD [ "npm", "start" ]
