# Autentificación API con JWT
El presente proyecto combina los framework ExpressJS -i.e. Para crear un API- y Typescript -i.e. Tipado de código-, cuyo objetivo es realizar dos servicios:
- Login: Servicio de autenticación, que genera una firma de JWT
- verify: Servicio de validación de la firma de token-

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋
Para esto es necesario instalar el framework, [NodeJS](https://nodejs.org/es/download/), así mismo debe instalar el paquete de pruebas:
```
npm install mocha -g
```

### Estructura 📦
* Estructura del proyecto
```
dist/                      -->  Proyecto traducido en javascript
src/                       -->  Recursos de typescript
    common/                -->  Objetos utilizados en comun en todo el proyecto
    interfaces/            -->  Estructuras de datos de transferencias de objetos
    middleware/            -->  Funcionalidades extras del Rest API -e.g. Autentificacion, manejo de errores-
    routers/               -->  Manejo de rutas del REST API
    services/              -->  Capa logica del rest api
test/                      -->  Archivos de testeos
```
* Para funciona
    * .env: Lista de variables de ambiente  
### Instalación 🔧
1. Instalar todos los paquetes del proyecto (Ir a la raíz del proyecto, se recomienda usar modo administrador del sistema operativo)
```
npm install
```
2. Traducir los archivos typescript a javascript
```
npm run webpack
```
3. Ejecutar el Rest API
```
npm start
```
## Ejecutando las pruebas ⚙️
Las pruebas verifican las funcionalidades del login y verificacion, la cual se deben ejecutar en dos comandos
1. Primer comando
```
npm start
```
2. Segundo comando
```
npm run test
```