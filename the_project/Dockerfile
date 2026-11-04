FROM node:26-bookworm-slim

WORKDIR /app

COPY package.json ./
RUN npm install

COPY .env tsconfig.json ./
COPY src ./src

RUN npm run build

CMD [ "npm", "start" ]
