# Cambiando Presupuesto Disponible

- Cuando el presupuesto disponible llegue a 0 no debería pasar a números negativos
- Existe una clase en CSS que he definido previamente como negativo
- Voy al párrafo y le coloco la clase de disponible, que se está actualizando todo el tiempo,  y si es menor a 0 entonces agrega la clase negativo.
- En caso contrario, no agregues nada.

![Captura11](./Captura11.png)

Puedo ir al pathColor del CircularProgressbar y decirle que si es mayor de cero lo pinte de rojo. Puedo hacerlo tambien con el textColor
~~~jsx
<CircularProgressbar
    styles={buildStyles({
        pathColor: porcentaje < 100? "red": "#3B82F6">
    
        ////////////    

    })}>
~~~~