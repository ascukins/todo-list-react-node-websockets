FROM node:16-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci
COPY . .
RUN npx tsc
EXPOSE 3003
CMD [ "node", "dist/server.js" ]
