FROM node:carbon
MAINTAINER jake@jakebladt.com

WORKDIR .
COPY . /restserver
EXPOSE 80:3000
RUN npm install
CMD ["node", "api.js"]
