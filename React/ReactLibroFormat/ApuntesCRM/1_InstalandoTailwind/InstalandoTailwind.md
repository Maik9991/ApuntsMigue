# Instalando Tailwind

    > npm i autoprefixer postcss tailwindcss
    > npx tailwindcss init -p

- En tailwind.config.js le digo que el archivo purge: [ "index.html", ./src/**/*.jsx ]
- Uso los comodines para buscar todos los archivos acabados en jsx
- En index.css importo
    
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;    

-----
En el body coy a agregar un par de clases
    - minimo el height tome toda la altura
    - el background sea un gris

~~~html
<body class="min-h-screen bg-gray-100">
~~~

