FROM node:11-alpine

WORKDIR /app

EXPOSE 3000

RUN yarn global add forever
RUN yarn cache clean

CMD forever -w .