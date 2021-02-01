# nuxt-starter

basic nuxt app with :
* Vuetify
* Dark/light
* multi-Language (i18n)

**Table of content**
- [Prerequisites](#prerequisites)
- [Installation](#Installation)
- [Configuration](#Configuration)
## Prerequisites

The tools you need to this starter run are :
* npm
* docker (optionnal)
* docker-compose (optionnal)
## Installation

```bash
 git clone https://github.com/LenineCode/nuxt-starter 
```
## Configuration

```bash 
$ client/ npm i  
```

## start

### npm

```bash
# start for developper
$ client/ npm run dev

# build for production and launch server
$ client/ npm run build
$ client/ npm run start

# generate static project
$ client/ npm run generate
```

## docker

```bash
# Start as daemon
docker-compose up -d

# Stop
docker-compose stop

# Get the status of starter
docker-compose ps
```

i will put more documentations after. or not at all because I will be lazy