#!/bin/bash

# Construye la imagen de Docker
docker build -t prueba-super-heroes .

# Ejecuta la aplicación en un contenedor Docker
docker run -p 4300:4300 prueba-super-heroes