FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3010
# required for docker desktop port mapping

CMD ["yarn", "start"]