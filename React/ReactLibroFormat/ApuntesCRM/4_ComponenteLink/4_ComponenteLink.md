# Link

- Si uso anchor tags para los links, puedo ver una recarga en el navegador al clicar sobre ellos
- Con react-router-dom se usa Link y NavLink. Debes importarlos de react-router-dom
- Tampoco se usa href, se usa to="/ruta"

~~~js
<nav className="mt-10">
          <Link to="/clientes"
          className="text-white text-2xl block mt-2 hover:text-blue-300"
          >Clientes</Link>
          <Link to="/clientes/nuevo"
           className="text-white text-2xl block mt-2 hover:text-blue-300"
          >Nuevo Cliente</Link>
        </nav>
~~~

-----
# useLocation Hook
- Lo importo de react-router-dom en el componente Layout.jsx.
- Le hago un console.log para ver que trae
~~~js
 const location = useLocation()

  console.log(location)
~~~
- Tiene un hash, que sirve para obtener parámetros de la url, un key único, trae el pathname dónde está ubicado el hook, y el Search que se llena con un queryString de la barra de navegación, un parámetro de búsqueda
- Guardo el pathName en una variable
- Para que se quede fijado cuando estoy  en Clientes lo meto en un template string y
    - evalúo la condición.
    - Lo meto entre strings porque si no creerá que es una variable
    - Cómo es código de javascript va entre llaves
~~~js
 className={`${urlActual ==='/clientes'? 'text-blue-300': 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
~~~
Copio y pego en el otro link y la comparación será con /clientes/nuevo


