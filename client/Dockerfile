FROM node:9.4.0

#ARG proxy=http://10.122.123.23:3129/
#ENV HTTP_PROXY=${proxy} HTTPS_PROXY=${proxy} http_proxy=${proxy} https_proxy=${proxy}
#RUN npm config set proxy ${HTTP_PROXY}
#RUN npm config set https-proxy ${HTTP_PROXY}
#RUN npm config set registry http://registry.npmjs.org/

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
