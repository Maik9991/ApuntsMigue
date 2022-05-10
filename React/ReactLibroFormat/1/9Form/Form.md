- Formik en su API da el objeto de initialValues
- Los inicializo como un string vacío
~~~js

<Formik
        initialValues ={{
          nombre: '',
          empresa: '',
          email:'',
          telefono:'',
          notas:''
        }}
      >
~~~

- Añado los atributos name con el mismo nombre del objeto (el mismo que el id)

>Entonces ahora cuando escriba en el input (del name), estaré llenando el del objeto initialValues

- Después del Formik, voy a meter todo el form en un arrow function dentro de llaves de javascript con el return implícito entre paréntesis

- Ahora en este arrow function hay mucha info.

# Leyendo los Valores del Formulario y el Evento onSubmit

- Coloco el onSubmit en el Formik después del initialValues, con una arrow function
- Si le pongo como argumento values y pongo un console.log(values) veré un objeto con todos los name.
- Ahora mapea todos los name con el objeto initialValues y va escribiendo dentro de la variable values
~~~jsx
  <Formik
        initialValues ={{
          nombre: '',
          empresa: '',
          email:'',
          telefono:'',
          notas:''
        }}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >

~~~

- En lugar de un console.log, puedo colocarle un handleSubmit que todavía no he creado y pasarle los values
- Asi ahora los tengo en la función que voy a escribir fuera del return
- Voy a llamarlos valores para no confundirme, y le pongo un console.log
~~~js
  <Formik
        initialValues ={{
          nombre: '',
          empresa: '',
          email:'',
          telefono:'',
          notas:''
        }}
        onSubmit={(values)=>{
          handleSubmit(values)
        }}
      >
~~~
~~~js
 const handleSubmit=(valores)=>{
    console.log(valores)
  }
~~~

- Formik se lleva muy bien con Yup para hacer las validaciones
