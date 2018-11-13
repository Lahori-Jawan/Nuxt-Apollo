# Demo

> My exquisite Nuxt.js project

## Build Setup

``` bash
# build image
$ docker build -t dev_prod .

# run container based off dev_prod image
$ docker run -it -p 4000:4000 --env-file ./.env --rm --name dp dev_prod

# store followings in .env file in project root
PROD_URL=localhost
PORT=4000
HTTP_ENDPOINT=my/graphql
# default setup is for development. for production uncomment following line
# NODE_ENV=production
