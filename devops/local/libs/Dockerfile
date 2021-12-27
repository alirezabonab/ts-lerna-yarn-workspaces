FROM node:gallium-alpine3.14

WORKDIR /src

RUN yarn global add lerna

COPY ./code/tsconfig.json ./code/tsconfig.json
COPY lerna.json .
COPY package.json .
COPY yarn.lock .

COPY ./code/libs code/libs

RUN yarn install

CMD lerna run dev:watch --stream
