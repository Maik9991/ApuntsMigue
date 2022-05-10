# Formik
- Es aconsejable usar una librería cuando hay muchos formularios, muchos campos o son complejos.

- Algunas librerías cuentan con validaciones muy robustas, otras se integran bien con laguna dependencia de validación

- Formik usa Yup y es la que voy a usar
- React Hook form es otra librería

- instalo con

        > npm i formik yup

Importo {Formik, Form, Field} from 'formik' en Formulario.jsx

-Uso Formik y Form como componentes
- Coloco un label con nombre y a continuación Field todo dentro de un div
- A este field le puedo agregar atributos
        - Type="text" o "password", value etc
- Tiene los mismos atributos que un input
- Le añado unas clases de tailwind:
    -margin-top de 2, display: block width todo el ancho, padding de 3, fondo gris
- Le añado un htmlFor al label y le paso el value al field, así cuando de clic al nombre,
se activa el input
- Le añado también un margin top de 10 al Form y un margin bottom al div entero
~~~js

      <Formik>
        <Form className="mt-10">
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='nombre'>Nombre:</label>
            <Field
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-100"
            placeholder="Nombre del cliente"/>
          </div>
        </Form>

      </Formik>
~~~
- Copio el código para el campo de la empresa, el mail, el telf cambiando los respectivos types htmlFor y id's

~~~js
 <Formik>
        <Form className="mt-10">
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='nombre'>Nombre:</label>
            <Field
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-100"
            placeholder="Nombre del cliente"/>
          </div>
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='empresa'>Empresa Cliente:</label>
            <Field
            id="empresa"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-100"
            placeholder="Nombre de la empresa"/>
          </div>
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='email'>Email</label>
            <Field
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-100"
            placeholder="Email del Cliente"/>
          </div>
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='telefono'>Teléfono</label>
            <Field
            id="telefono"
            type="tel"
            className="mt-2 block w-full p-3 bg-gray-100"
            placeholder="Teléfono del Cliente"/>
          </div>
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='notas'>Notas</label>
            <Field
            id="notas"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-100"
            placeholder="Notas"/>
          </div>
        </Form>

      </Formik>
~~~

- Field por defecto te coloca un input pero yo le puedo cambiar el tipo de elemento con as
- Lo hago más grande con una altura de 40
~~~js
          <div className="mb-4">
            <label 
            className='text-gray-800'
            htmlFor='notas'>Notas</label>
            <Field
            as="textarea"
            id="notas"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-100 h-30" //altura
            placeholder="Notas"/>
          </div>
~~~
- Creo el boton de submit
        - Margin top de 5, todo el ancho, color azul, texto blanco, mayúsculas, bold, texto más grande
~~~js
        <input 
          type="submit"
          value="Agregar Cliente"
          className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"/>
~~~
- Añado un mediaquery al div del Outlet en Layouts y le digo que con un tamaño mediano o más grande la alturta va a ser lo que mida la pantalla
- Va a tomar toda la altura disponible, y puedo ver que si bajo con el scroll el azul de la columna se corta. Por eso el overflow-scroll del lado del outlet
- De esta forma tengo el scroll en la parte derecha y en la izquierda no
~~~js
        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
          
        </div>
~~~



