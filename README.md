# Práctica de agencia de viajes con node.js

## HEROKU

-   Instalar Heroku:
    `sudo snap install heroku --classic`
-   Iniciar sesión en el navegador:
    `heroku login`
-   Crear repositorio remoto de heroku:
    `heroku create --remote production`
-   Pushear el repositorio de git al remoto de heroku
    `git push production main`
-   Para ver los datos del remoto de Heroku:
    `heroku config | grep CLEARDB_DATABASE_URL`
-   Para la configuración del dump:
    `mysql dump -u root -p agenciaviajes > agenciaViajes.sql`
-   Para la realización del bindeado del dump, hay que utilizar mysqldump:
    `mysqldump -u b84b61f079325e -h us-cdbr-east-03.cleardb.com -p heroku_e6e197cb9b8b1c3 < agenciaViajes.sql`
-   Siempre que se hagan cambios en los archivos del servidor hay que reescribirlo del siguiente modo:
    1. `git add .`
    2. `git commit -m "comentario"`
    3. `git push` o bien `git push -u origin main`
    4. `git push production main`
