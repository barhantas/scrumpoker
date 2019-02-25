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
## FOR RUN WITH NODE

### Install Node Packages
Before run project for development you need to install packages with:

*Server*
```shell
npm i
```

*Client*

```shell
cd client
npm i
```

### Start Project
Start Server and Client seperately with :

*Server*
```shell
npm start
```

*Client*
```shell
cd client
npm start
```



## FOR RUN WITH DOCKER

> Please give your host machine IP Adress in `client/src/constants/index.js` as `IP`, if you want to run project with *docker*.

> work in project root folder

```shell
docker-compose up --build -d
```

> Server running on  `IP:8800`

> Server socket  `IP:8810`

> Client running on `IP:3000`

