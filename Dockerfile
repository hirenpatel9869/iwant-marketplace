### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:12-alpine as builder
#FROM node:8-alpine

COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install npm@latest -g

RUN  npm i -f

RUN npm install angular2-hotkeys --save && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build --prod --build-optimizer
RUN node --max_old_space_size=8192 node_modules/.bin/ng build --prod --build-optimizer

#RUN cp -R ../bower_components ./dist/.

### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/iwant-marketplace /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
