# Añadiendo el state y retornando el valor

- Incorporo un useState en useSelectMonedas
- Lo agrego en el value del componente Select, lo que hará que cada vez que reutilice este componente tenga su propio state, no se va a mezclar con otros 
- En el onChange le paso el e en un arrow function con el setState(e.target.value)

![Foto9](./Foto9.png)

- Coloco el state en el return del custom hook

~~~jsx
 return [state, SelectMonedas]
~~~

- Como la desestructuración se hace por índice, debo colocarlo en la misma posición

~~~jsx
const [state, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
~~~

Si ahora coloco el state entre llaves dentro del fragment cuando selecciono una moneda lo imprime en pantalla: ya tengo el state en el formulario

P

