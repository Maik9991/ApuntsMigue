# Agrupando Rutas

- Importo NuevoCliente y EditarCliente en App.jsx

- Si coloco el Route dentro de /clientes, solo tengo que colocar nuevo en el path de NuevoCliente
- Si quiero que responda a un id le añado un placeholder con : basado en el id
~~~js
  <Route path="/clientes" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="nuevo" element={<NuevoCliente />}/>
              <Route path="editar/:id" element={<EditarCliente />}/>
           </Route>
~~~
>Borro el primer grupo de rutas, dejo solo /clientes
>Borro IniciarSesion

-----

# Layout

Le coloco clases de Tailwind al div de Layout
- Le digo que en tamaño mediano aplico flexbox
- Y que el tamaño minimo de pantalla es toda la altura
- En div hijo, que la barra lateral tiene un width de 1/4
- En otro div 3/4
~~~js
import {Outlet} from 'react-router-dom'

const Layouts = () => {
  return (
    <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4">
            1
        </div>

        <div className="md:w-3/4">
        <Outlet />
            
        </div>        
    </div>
  )
}


export default Layouts
~~~

De esta manera tengo un grid
- El 1 va a ser una barra lateral que se va a compartir en todos los componentes
- En la parte más grande de la pantalla el contenido
---
- Un padding x de 5 y un padding y de 10
- Dentro un h2 con la clase 4xl para que sea más grande el texto, font-black para que sea en negritas
- También un text-center para centrarlo y un text-white para darle el color blanco
- Le añado un nav con dos enlaces
    - CLientes
    - Nuevo Cliente
- Le añado las rutas
~~~js
 <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-blue-900 px-5 pyy-10">
          <h2 className="text-4xl font-black text-center text-white">CRM- Clientes</h2>
       
        <nav className="mt-10">
          <a href="/clientes">Clientes</a>
          <a href="/clientes/nuevo">Nuevo Cliente</a>
        </nav>
        
        </div>
~~~
Le añado las clases a los enlaces. La misma para los dos
- texto  color blanco, grande 2xl, display:block, un margin-top de 2 y en el hover un blue

~~~js
 className="text-white text-2xl block mt-2 hover:text-blue-300"
~~~
