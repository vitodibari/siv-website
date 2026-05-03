FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
CMD [ "node", "./dist/server/entry.mjs" ]
EXPOSE 4321
