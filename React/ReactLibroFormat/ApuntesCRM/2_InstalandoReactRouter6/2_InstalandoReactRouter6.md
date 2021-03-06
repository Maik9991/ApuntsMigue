# Instalando React Router 6

- Con el Routing puedo tener varias url por cada componente/página que quiero mostrar
- También puedo restringir el acceso
- React Router es la más popular
- Gatsby y Next incorporan su propio router

        > npm -i react-router-dom

Lo importo en App.jsx

~~~js
import {BrowserRouter, Routes, Route} from 'react-router-dom'
~~~

# Definiendo Rutas

Creo la carpeta Layouts con dos archivos: IniciarSesión.jsx Layout.jsx
Creo la carpeta llamada páginas con varios componentes:
    - Inicio.jsx
    - EditarCliente.jsx
    - NuevoCliente.jsx
    - LoginForm

- App es el componente principal, ahí instalo Browser Router
- Dentro de Routes estarán tods mis rutas, cada una en un Route
- En React-Router6 se pueden usar nested routes
- Tengo un >Route de apertura y cierre que significa un grupo de Rutas y dentro un Route solo de cierre, que significa una sola ruta

- Le digo que cuando visite la página principal en la ruta "/" muestre el elemento IniciarSesion 

- Creo otro grupo de rutas con /clientes para que muestre el Layout
Lo que coloque dentro de ellos va a ser rutas anidadas


- Coloco inicio sin path dentro de la ruta /clientes
- Donde importe Outlet de 'react-router-dom' lo mostrará
- Importo {Outlet} en el componente Layouts y lo coloco debajo del h1
- Cómo puede haber varias rutas anidadas, pero hay que especificar cual es la del index



~~~js
import {Outlet} from 'react-router-dom'

const Layouts = () => {
  return (
    <div>
        <h1>Layouts</h1>
        <Outlet />
    </div>
  )
}

export default Layouts
~~~

- Ahora si. Siempre que visite /clientes va a insertar este Layout y dentro va a ir agregando cada componente por separado. Separar un header, un sidebar he ir agrupándolo en este Layout. 
- En todas las páginas voy a tener ese layout, que puede ser un header, un menú de navegación, lo que sea. Abajo un footer y en medio todo lo que se vaya agregando a este Outlet

- Hago lo mismo dentro de /
~~~js
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<IniciarSesion />}>
            <Route index element={<LoginForm />} />
          </Route>
           
           <Route path="/clientes" element={<Layout />}>
              <Route index element={<Inicio />} />
           </Route>
      </Routes>
    
    </BrowserRouter>
~~~

>Es importante importar el Outlet en el componente y colocarlo

        import {Outlet} from 'react-router-dom'
