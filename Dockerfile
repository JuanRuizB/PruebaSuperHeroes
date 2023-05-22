# Establece la imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Compila la aplicación
RUN npm run build --prod

# Expone el puerto 80 para acceder a la aplicación desde el exterior
EXPOSE 4300

# Define el comando de inicio del contenedor
CMD [ "npm", "start" ]