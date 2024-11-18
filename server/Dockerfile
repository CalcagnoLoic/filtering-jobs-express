FROM node:22-alpine3.20
WORKDIR /server

COPY package*.json .
RUN npm install
COPY . .

CMD [ "node", "index.js" ]