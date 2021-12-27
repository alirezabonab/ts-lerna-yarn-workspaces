FROM node:gallium-alpine3.14

WORKDIR /src

RUN yarn global add lerna

# root level configurations
COPY ./code/tsconfig.json ./code/tsconfig.json
COPY lerna.json .
COPY package.json .
COPY yarn.lock .

# libs pacakge.json files
COPY ./code/libs/common/package.json code/libs/common/package.json
COPY ./code/libs/react-components/package.json code/libs/react-components/package.json

RUN yarn install

CMD lerna run dev:watch --stream
