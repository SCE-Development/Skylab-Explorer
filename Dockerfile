FROM node:14

WORKDIR /code

ENV PORT 3000

COPY package.json /code/package.json

RUN yarn install

COPY . /code

CMD [ "yarn" , "dev" ]