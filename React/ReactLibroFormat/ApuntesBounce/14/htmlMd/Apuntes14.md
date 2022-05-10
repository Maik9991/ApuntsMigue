# Validando Gastos

- **Ahora** es realizar una lógica para que cuando se le dé al submit de añadir gasto, se validen los campos y en caso de no ser válido mostrar un mensaje
- Pongo el onSubmit en el form y le introduzco la funcion que crearé antes del return del componente, handleSubmit

- Le coloco el preventDefault para evitar el refresh y un console.log para comprobar que cuando doy clic al añadir gasto envía diciendo 'Añadiendo formulario'
![Captura55](./Captura55.png)

- Para la validación coloco las variables del state en un arreglo y uso .includes, para decir que si alguno de los tres campos está vacío ejecute una accíon. 
- Uso el console.log para comprobar que al momento de validar cumple si alguno de los campos no estan rellenados 
- Le añado un return para que no ejecute las siguientes lineas

~~~jsx
 const handleSubmit = (e) =>{
      e.preventDefault()
      if([nombre, cantidad, categoria].includes('')){
        console.log('Falló la validación')
        return
      }
    }
~~~

- Ahora en lugar de ese console.log, voy a crear un nuevo state más, mensaje y setMensaje

~~~jsx
   const handleSubmit = (e) =>{
      e.preventDefault()
      if([nombre, cantidad, categoria].includes('')){
        setMensaje('Todos los campos son obligatorios')
      }
    }
~~~

- Puedo comprobar el state en components de devtools dando clic a "Añadir Gasto"
![Captura56](./Captura56.png)

- Ahora puedo reutilizar el componente Mensaje.
    - Tiene un children, que es todo lo que introduzca en el componente
    - Tiene un tipo, que tambien va a ser error, siendo la clase de CSS
![Captura57](./Captura57.png)

- Lo importo.
- Coloco el mensaje después del legend de gasto , y le voy a decir que
    - cuando mensaje esté en true muestre el componente de mensaje
    - le paso por props el tipo error y le coloco el mensaje en el children
    - Le paso el mensaje que estoy seteando con setMensaje
![Captura58](./Captura58.png)

- El resultado es este
![Captura59](./Captura59.png)

- Para quitar este mensaje al cabo de unos segundos puedo colocar un setTimeOut y setear el mensaje a string vacío con setMensaje


- Ahora en App.jsx creo una función antes del return que se llame guardarGasto y se la paso por props al modal, con el console.log de gasto

~~~jsx
  const guardarGasto = gasto =>{
      console.log(gasto)
  }
~~~

- Se lo agrego al handleSubmit fuera de la validación, pongo un return y genero el objeto nombre, cantidad y categoria. Lo imprime en consola


![Captura61](./Captura61.png)

- Lo puedo ver en consola
![Captura62](./Captura62.png)

- Ya tengo el objeto
- Ahora puedo crear otro state con gastos, setGastos con valor inicial de un arreglo vacío
- Entonces puedo usar setGastos para agregar los gastos en App.jsx
- Le paso del hijo al padre, pero para hacer iteraciones necesito un id único
- Veamos cómo hacerlo
