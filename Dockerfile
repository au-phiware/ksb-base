FROM node:7.9.0
# something like:
WORKDIR /srv/blank
COPY . /srv/blank
ADD package.json /tmp/package.json
# --production
RUN cd /tmp && npm install
RUN mkdir -p /srv/blank && cp -au /tmp/node_modules /srv/blank
CMD npm run staging
