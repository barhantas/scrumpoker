# Scrum Poker App
![](https://media.giphy.com/media/mC1BL200zCY38Dyjoa/giphy.gif)

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

### Prerequisites
Make sure that you have Node,NPM and MongoDB installed.

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

### Prerequisites
Make sure that you do not need any proxy configuration.
If you have to set proxy configuration,please uncommet proxy config part in both DockerFiles.

Please give your host machine IP Adress in `client/src/constants/index.js` as `IP`.

### RUN DOCKER
> work in project root folder

```shell
docker-compose up --build -d
```

> Server running on  `IP:8800`

> Server socket  `IP:8810`

> Client running on `IP:3000`

