# Styled Components

Instalación

    > npm i @emotion/react @emotion/styled

- Se puede crear un elemento html con la sintáxis de un componente (capital mayúscula) y añadirle propiedades CSS. 
- Se le conoce como CSS en JS
- Una de las ventajas es que cuando ese elemento o módulo deja de utilizarse, el CSS también

- Puedes reutilizarlo y usar CSS normal a la vez


## SINTAXIS

- Se declara la constante y se usa la palabra styles seguida de un punto y el elemento HTML
- Luego se usan back ticks y el código CSS
- Se necesita importar: import styled from '@emotion/styled

![Foto1](./Foto1.png)

- Este Heading no va a crear una etiqueta nueva, a final de cuentas se traducirá a un h1

- En el index.css escribo la fuente y el background-color

~~~css
body{
    background-color: #0D2235;
    font-family: Helvetica;
}

~~~

- Hago mi primer Styled Component

![Foto2](./Foto2.png)

- Creo otro SC (Styled Component) Contenedor y otro SC para la imagen

~~~js
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
~~~

- Envuelvo ambos componentes con el contenedor y le pongo los atributos a Imagen
~~~js

function App() {
  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt="imagenes criptomonedas"
      />
      <Heading>Desde App</Heading>

    </Contenedor>
  )
}
~~~

- Los SC soportan los media-query sin ningún problema

~~~js
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
  }
`
~~~

No es necesario crear SC para todo. 
- Meto el Heading en un div para tener agrupado todo lo del formulario
- Le añado al Heading un text-align: center en el Styled Component (SC)
- Un margin-top: 80px, y un margin-bottom: 50px

---
## Los styled components soportan prácticamente todo
---
- Le añado un pseudoelemento para la linea dibujada de abajo del h1

![Foto3](./Foto3.png)

- Está quedando así

![Foto4](./Foto4.png)