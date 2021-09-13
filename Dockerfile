FROM node:14

WORKDIR /usr/src/alunos-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prebuild && npm run build

CMD ["npm", "run", "start:prod"]