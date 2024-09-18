# API-WEB-FEELINGS
API-WEB IN ORDER TO ANALYZE FEELINGS.YOU WRITE A TEXT, GIVING A PERCENTAGE OF HOW MUCH POSITIVE AND NEGATIVE IT IS

STEPS
1.INSTALL BUN: IS A JAVASCRIPT RUNTIME FAST AND LIGHT(https://bun.sh/)
    WINDOWS:powershell -c "irm bun.sh/install.ps1 | iex"
2.INSTALL HONO IN THE TERMINAL(FOR APIS WEB)
    - bun install hono
3.EXECUTE THE COMMAND TO RUN DE API WEB(CONNECTION TO http:localhost:3000)
    - bun run ./apiweb.ts


DECISIONES:
Al empezar este proyecto elegí sin dudar el analisis de sentimientos es decir, si los sentimientos que generan son mayormente positivos o negativos.
Para ello me hice un boceto para tener una idea de como seria el diseño.Esta elección tenia una estructura bastante fija en la que hay un texto que introduces, le das a analizar y te muestra que tan positivo y negativo es el mensaje que has escrito. En el github se puede ver un boceto de la api web(BOCETO.PNG).
Para el diseño de la página decidí usar Bootstrap que me parecio una diseño muy agradable a la vista, usando colores claros como el blanco y el azul.Para las barras de positivo y negativo usé los colores verde y rojo respectivamente, dandóles una pequeña animación de movimiento; junto con su debido porcentaje.
En el srcipt.js están todas las funciones que uso como la de llamar al token, clickar y que se actualice todo etc.. Y para el diseño de la página web elegí esta api: 
[https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english](https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english)

En el .gitignore es ponen alguna carpetas como node_modules que son las que se crean cuando ejecutas el "bun run apiweb.ts" por primera vez. El .env porque contiene claves sensibles como el ACCESS_TOKEN y el PORT; es decir, en tu máquina debes crear el .env t poner"ACCES_TOKEN=hf_XXXXXXXXXXXXXXXXX y PORT=XXXX.



