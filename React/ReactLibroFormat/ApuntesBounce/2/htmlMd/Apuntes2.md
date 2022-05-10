# Comenzando

- Creo la carpeta en el escritorio.

- Uso npm init vite@latest en la consola para crear el proyecto.

- cd en la carpeta y npm run dev para ejecutar el proyecto en el localhost

- Limpio todo lo que no me sirve del proyecto.

- Uso el archivo Normalize en el html para resetear todo el CSS predefinido.

- El archivo css está hecho previamente, lo inserto en el html

- Copio en la carpeta de img los iconos de la carpeta adjunta del proyecto

# Componente NuevoPresupuesto

- Creo los componentes Header y NuevoPresupuesto con el snippet rafce con la exportación por default

- Utilizo la terminación jsx, es obligatorio en vite, igual que la capitalización de los componentes

- Coloco la etiqueta header en el componente con un h1 y lo importo en App.jsx

- Importo NuevoPresupuesto, al que le he agregado algunas clases predefinidas y un formulario

~~~jsx

import NuevoPresupuesto from './NuevoPresupuesto'
const Header = () => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
    </header>
  )
}

export default Header

~~~
----
~~~js


const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form action="" className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
          className="nuevo-presupuesto"
          type="text"
          placeholder="Añade tu presupuesto"
          ></input>
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  )
}

export default NuevoPresupuesto

~~~~
- Este es el resultado
![capture11](./Captura11.png)




