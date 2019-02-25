# Scrum Poker App

A simple example of scrum poker planning app

## Usage

Clone repository with one of the following ways and start coding.

with HTTPS:

```shell
git clone https://github.com/barhantas/scrumpoker.git
```

with SSH:

```shell
git clone git@github.com:barhantas/scrumpoker.git
```

## Install
Before run project for development you need to install packages with:
(If you are going to run with docker you can skip this steps.)

### Server
```shell
npm i
```

### Client

```shell
cd client
npm i
```

## Development
Start Server and Client seperately with :

### Server
```shell
npm start
```

### Client
```shell
cd client
npm start
```

## Deployment
> Please give your host machine IP Adress in `client/src/constants/index.js` as `ENDPOINT_URL` and `SOCKET_URL`, if you want to run project with docker.

### Run as a Docker container

> Server running on  `ENDPOINT_URL:8800`

> Server socket  `SOCKET_URL:8810`

> Client runnig on `ENDPOINT_URL:3000`

> work in project root folder

```shell
docker-compose up --build -d
```
