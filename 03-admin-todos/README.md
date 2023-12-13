# Development

Pasos para levantar la app en local:

-   Levantar la base de datos con `docker-compose up -d`
-   Renombrar el archivo `.env.example` a `.env`
-   Reemplazar los valores de las variables de entorno en el archivo `.env` con los valores correspondientes
-   Instalar las dependencias con `npm install`
-   Levantar el servidor de desarrollo con `npm run dev`
-   Ejecutar seed de la base de datos [seed](localhost:3000/api/seed)

# Prisma

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
