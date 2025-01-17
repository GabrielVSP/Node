FROM node:23-alpine3.20

COPY app.js /app/
COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app/

RUN npm install

CMD ["node", "app.js"]