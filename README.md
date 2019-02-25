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

### Server
```shell
npm i
```

### Client App
> Please give your host machine IP Adress in `client/src/constants/index.js` as `ENDPOINT_URL` and `SOCKET_URL`, if you want to run project with docker.

```shell
cd client
npm i
```

## Development
### Node App
```shell
npm start
```

### Frontend App
```shell
cd client
npm start
```

## Deployment

### Run as a Docker container

> Server running on  `ENDPOINT_URL:8800`

> Server socket  `SOCKET_URL:8810`

> Client runnig on `ENDPOINT_URL:3000`

> work in project root folder

```shell
docker-compose up --build -d
```
