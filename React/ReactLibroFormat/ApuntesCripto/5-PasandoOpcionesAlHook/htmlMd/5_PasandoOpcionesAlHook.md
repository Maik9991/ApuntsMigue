# Pasando Opciones al HooK
- Creo un arreglo de objetos llamado monedas antes del custom hook
- Con un id y un nombre

~~~js
const monedas = [
    {id:'USD', nombre: 'Dólar de Estados Unidos'},
    {id:'MXN', nombre: 'Peso Mexicano'},
    {id:'EUR', nombre: 'Euro'},
    {id:'GBP', nombre: 'Libra Esterlina'},
  ]
~~~

- Se lo coloco a useSelectMonedas como segundo parametro
~~~~jsx
 const [SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
~~~~
- Lo llamo opciones en useSelectMonedas
- Hago un .map de opciones, uso el id como key y renderizo entre llaves opciones.nombre

![Foto8](./Foto8.png)

- Para no ensuciar el componente , copio el codigo en otro archivo dentro de la carpeta src/data
- Puedo llamar al archivo monedas.js y exportarlo con export y llaves por si importo mas cosas

~~~js
export {
    monedas
}
~~~

- Lo importo en el Formulario entre llaves
- Antes de incorporar la función de que se agregue al state voy a darle estilos

![Foto8](./Foto8.png)

