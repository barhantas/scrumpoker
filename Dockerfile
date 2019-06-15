FROM node:9.4.0-alpine

#ARG proxy=http://10.122.123.23:3129/
#ENV HTTP_PROXY=${proxy} HTTPS_PROXY=${proxy} http_proxy=${proxy} https_proxy=${proxy}
#RUN npm config set proxy ${HTTP_PROXY}
#RUN npm config set https-proxy ${HTTP_PROXY}
#RUN npm config set registry http://registry.npmjs.org/


WORKDIR /app
COPY package*.json ./
COPY . /app
RUN npm install -qy

ENV PORT 8000

EXPOSE 8000

CMD until nc -z mongo 27017; do sleep 1; done; npm start 
