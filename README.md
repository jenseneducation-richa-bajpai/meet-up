# meet-up

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Steps for building up the app

```
Created the VueX project
Pushed up the project to the cloud service Heroku
```

### DOCKERIZE vue app

```
docker build -t docker-richa .
docker run -it -p 8020:8080 --rm --name dockerize-meetup docker-richa
```

### Push an existing docker image to Heroku

```
heroku container:login (if haven't logged in)
docker tag docker-richa registry.heroku.com/meet-up-richa/web
docker push registry.heroku.com/meet-up-richa/web
heroku container:release --app meet-up-richa web
```

### Data

```
External file for data.
8 meetups in .js file
```

### Tests and building the

```
Tested different components
Started building different components
```

### Published the app in a Docker container with Heroku.
