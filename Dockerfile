FROM node:7.9.0
# something like:
WORKDIR /srv/blank
COPY . /srv/blank
# cite version: was optmised way to install docker npm deps... 
ADD package.json /tmp/package.json
# --production
RUN cd /tmp && npm install
RUN mkdir -p /srv/blank && cp -au /tmp/node_modules /srv/blank
# assume only for deployment
CMD npm run staging
