FROM node:8.12.0-alpine

ENV APP_DIR /user/src/app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# RUN mkdir -p ${APP_DIR}
#because its alpine so we use apk instead of apt-get
RUN apk update && apk add nano

WORKDIR ${APP_DIR}

COPY package*.json ${APP_DIR}
COPY yarn.lock ${APP_DIR}

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4000

ENV HOST 0.0.0.0
# ENTRYPOINT ["yarn", "dev", "-H", "0.0.0.0"]
CMD [ "yarn", "start" ]

