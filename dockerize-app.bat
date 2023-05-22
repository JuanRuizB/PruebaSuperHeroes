@echo off

REM Construir la imagen de Docker
docker build -t prueba-super-heroes .

REM Ejecutar la aplicación en un contenedor Docker
docker run -p 4300:4300 prueba-super-heroes