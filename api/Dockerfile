FROM node:18.6-bullseye

ARG APP_ROOT=/app
WORKDIR ${APP_ROOT}

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY db.json ./

EXPOSE 8080

CMD yarn run server
