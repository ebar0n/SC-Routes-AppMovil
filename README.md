# SC-Routes-AppMovil

## Instrucciones de uso

Dasarrollado con [Ionic](http://ionicframework.com/).

Clonar repositorio, abrir `./www/index.html` en firefox, y trabajar normalmente en una app web.

## Compilación

### Prerequisitos
0. Instalar docker

    0. docker [Docker](https://www.docker.com)

    0. docker-machine [machine](https://docs.docker.com/machine/) and [install-virtualbox](https://www.virtualbox.org/wiki/Downloads) *optional in linux* 

    0. docker-compose [compose](https://docs.docker.com/compose/install/)

### Compilacion de APK
```
docker-compose run --rm app bash
ionic platform add android
ionic build android
```

Copiar archivo `./platforms/android/build/outputs/apk/android-debug.apk` a un movil con Andrid
