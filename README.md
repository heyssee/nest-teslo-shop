<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <h4 align="center"> <strong> NestJS</strong>   </h4>

# Teslo API  
### Pasos para ejecutar la app:
1. Clonar el proyecto.

2. Instalar dependencias. 
``` 
yarn install 
```
3. Clonar archivo __.env.template__ y renombrarlo a __.env__

4. Cambiar las variables de entorno.

5. Levantar la base de datos.

``` 
docker-composer up -d
```
6.  Ejecutar Seed.
```
http://localhost:3000/api/seed/
```

7. Levantar el ambiente.
```
yarn start:dev
```
