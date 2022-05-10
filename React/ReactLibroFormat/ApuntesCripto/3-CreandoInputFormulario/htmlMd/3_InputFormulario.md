# Creando el Input del Formulario

Creo la carpeta Components, añado el Componente Formulario, lo creo con rafce
- Le añado un form con un input de type submit y value cotizar
- Lo importo en el App.jsx y lo coloco después del Heading en el mismo div
- Aparece un botón que pone cotizar. Voy a darle estilos con SC
----

- Importo styled from '@emotion/styled'
- Creo el SC InputSubmit

![Foto5](./Foto5.png)

- Lo agrego a formulario

~~~js

const Formulario = () => {
  return (
      <form>
          <InputSubmit type="sumbit"
          value="cotizar" />
      </form>
  )
}
~~~









