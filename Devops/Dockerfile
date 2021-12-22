FROM node:gallium-alpine3.14

ARG BUILD_CONTEXT
ENV BUILD_CONTEXT ${BUILD_CONTEXT}

WORKDIR /src

COPY ./Code/tsconfig.json ./Code/tsconfig.json
COPY lerna.json .
COPY package.json .
COPY yarn.lock .

COPY ./Code/apps/$BUILD_CONTEXT/package.json Code/apps/$BUILD_CONTEXT/package.json

COPY ./Code/libs Code/libs

RUN yarn install

COPY ./Code/apps/$BUILD_CONTEXT Code/apps/$BUILD_CONTEXT

CMD yarn workspace @foxmono/${BUILD_CONTEXT} dev
