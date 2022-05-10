# Formatear la fecha
- Javascript tiene una api para formatear fechas
- Se le puede especificar las opciones y el idioma
~~~js
const fecha = new Date()

const opciones = {
    year: 'numeric',
    month:'long',
    day: '2-digit'
}    

fechaFormat = fecha.toLocaleDateString('es-ES', opciones)
~~~

La función que voy a hacer en los helpers va a llevar fecha. 
    - Ya que no sabemos que fecha va a ser, le paso fecha como argumento

- Coloco fecha en new Date para que tenga una instancia de tipo fecha
- Inserto las opciones
- En el return hago el formateo
![Captura74](./Captura74.png)

- Lo bueno de esta API es que casi todos los navegadores que se pueden consultar en can I use lo soportan, a diferencia de otras librerias

- Importo esta función en el componente Gasto y agrego un parrafo con la frase Agregado el y un espacio.

- Puedo extraer la fecha de la desestructuracion de gasto y la meto en la funcion dentro de un span
![Captura75](./Captura75.png)

- Ahora aparecen los gastos así
![Captura76](./Captura76.png)

- Fuera de este div le agrego otro párrafo por fuera de contenido gasto para que se aplique correctamente el CSS
![Captura77](./Captura77.png)

- Así aparece el dinero del gasto en pantalla
![Captura78](./Captura78.png)





