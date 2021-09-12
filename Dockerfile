FROM node:14

# RUN mkdir -p /usr/src/alunos-api
WORKDIR /usr/src/alunos-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prebuild && npm run build

CMD ["npm", "run", "start:prod"]