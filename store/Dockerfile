FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3012
# required for docker desktop port mapping

CMD ["yarn", "start"]