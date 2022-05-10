# Eliminar

- La acción de eliminar esta en Gasto, se quedó como un console.log
- Para eliminar un gasto voy a necesitar el id
- Defino la función de flecha en App.jsx. Pongo un console.log con el id para probar
~~~js
  const eliminarGasto = id =>{
    console.log('eliminando ', id)
  }
~~~ 

- La paso a Listado de Gastos via props y luego a Gasto por props también
- En gasto tengo el id de la desestructuración

![Captura1](./Captura1.png)

- Si ahora arrastro hacia la izquierda para eliminar puedo ver en consola que dice eliminando y un id
- Como estoy obteniendo el id correctamente, puedo usar un filter en esta función para sacar ese elemento que deseo eliminar

- La variable temporal va a ser gasto, y le digo que se traiga todos los del id diferentes del que le estoy pasando.
- Le puedo poner un console.log para comprobar que lo hace correctamente
----
----
---
~~~js

  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto=>gasto.id !== id)
    console.log(gastosActualizados)
  }

~~~

Entonces ahora debo agregarle setGastos con los gastos actualizados,
así desaparece

~~~js
  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto=>gasto.id !== id)
    setGastos(gastosActualizados)
  }
~~~

- Swipe tiene una propiedad por via props que hace la transición de elminar mejor
    - destructive

![Captura2](./Captura2.png)