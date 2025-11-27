FROM node:21

WORKDIR /src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

CMD [ "node", "dist/src/main" ]
