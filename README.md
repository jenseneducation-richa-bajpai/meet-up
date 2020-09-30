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

1. Created the VueX project

2. Pushed up the project to the cloud service Heroku
   steps
   DOCKERIZE vue app
3. docker build -t docker-richa .
4. docker run -it -p 8020:8080 --rm --name dockerize-meetup docker-richa

++++++ Push an existing docker image to Heroku +++++++++++
Repeat the above process to rebuild the image for any changes made in vue app

1. heroku container:login (if haven't logged in)
2. docker tag docker-richa registry.heroku.com/meet-up-richa/web
3. docker push registry.heroku.com/meet-up-richa/web
4. heroku container:release --app meet-up-richa web

3) Data
   -External file for data.
   8 meetups in my .js file

4) Tests and building the App
   Tested different components
   Started building different components
