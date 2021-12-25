FROM node:gallium-alpine3.14

WORKDIR /src

RUN yarn global add lerna

COPY ./Code/tsconfig.json ./Code/tsconfig.json
COPY lerna.json .
COPY package.json .
COPY yarn.lock .

COPY ./Code/libs Code/libs

RUN yarn install

CMD lerna run dev --stream
