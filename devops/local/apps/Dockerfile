FROM node:gallium-alpine3.14

ARG BUILD_CONTEXT
ENV BUILD_CONTEXT ${BUILD_CONTEXT}
ENV PORT 80
EXPOSE $PORT

WORKDIR /src

RUN yarn global add lerna

COPY ./code/tsconfig.json ./code/tsconfig.json
COPY lerna.json .
COPY package.json .
COPY yarn.lock .

COPY ./code/apps/$BUILD_CONTEXT/package.json code/apps/$BUILD_CONTEXT/package.json

COPY ./code/libs code/libs

RUN yarn install

COPY ./code/apps/$BUILD_CONTEXT code/apps/$BUILD_CONTEXT

CMD lerna run dev:watch --scope @foxmono/${BUILD_CONTEXT} --stream
