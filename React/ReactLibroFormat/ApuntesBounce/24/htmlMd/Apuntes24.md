# Editando los gastos

- Hay que colocar una condición en el Legend de de Nuevo Gasto del Modal
- Si existe gasto.editar entonces es que estoy editando
~~~js
 <legend>{gastoEditar.nombre? "Editar Gasto": "Nuevo Gasto"}</legend>
~~~

![Captura92](./Captura92.png)

Sigue haciendo la vadilación, pero la manera en la que guardarGasto va a saber si estoy editando o cargando un nuevo gasto va a ser a través de un nuevo state en Modal.jsx que nombraré id

![Captura93](./Captura93.png)

- Lo añado a guardarGasto

![Captura94](./Captura94.png)

- Puedo ir al cuerpo de la función guardarGasto y ponerle un console.log y un return, para ver si ha agregado el id

![Captura95](./Captura95.png)

- Recuerda, la función que proprocionaba el id

![Captura96](./Captura96.png)

- Ahora lo puedo ver en consola cuando doy a Añadir gasto en el Modal de Editar
- Puedo ver que si agrego un nuevo gasto no tiene id, va a estar vacío
- Eso me sirve para la validacion

![Captura97](./Capturta97.png)

- Para actualizar voy a usar un .map para que regrese un nuevo arreglo en la variable gastosActualizados, que va a iterar sobre el state
- Le voy a decir que cuando el gastoState sea igual al gasto que le estoy pasando que estoy editando, que retorne el gasto, porque el gasto va a ser el objeto actualizado
- En caso contrario retorna lo que esté en el state
- Y coloco el setGastos a este nuevo arreglo de gastosActualizados

![Captura98](./Captura98.png)

- Ahora el problema es que dice invalidDate, porque cuando estoy generando el nuevo gasto se genera una fecha pero al editar ese campo no le he pasado ninguna, asi que necesito otro state, el último, en el Modal, con fecha y setFecha

- Lo agrego al useEffect

![Captura99](./Captura99.png)

- Al estar colocándolo en el state lesta disponible fecha, lo agrego a guardarGasto

![Captura100](./Captura100.png)











-----

        Nota: se me olvidó hacer el condicional del input del Modal para cuando estoy editando

------
~~~js
 <input type="submit"
                value={gastoEditar.nombre ? 'Editar Gasto': 'AñadirGasto'} />
~~~
-----





