# Creando el Formulario de Presupuesto

- Cuando introduzco un presupuesto, este está disponible en otros componentes cómo se puede ver en la app finalizada
    - Presupuesto
    - Disponible
    - Gastado
- Ese state va a pasar por diferentes componentes
- Cuando va a pasar por más de un componente es recomendable ponerlo en el principal, App.jsx
- Importo useState from 'react' en App.jsx
- Le paso el state y el setState por las props al Header
- Lo extraigo en el Header por las props

~~~js
import Header from "./Components/Header"
import {useState} from 'react'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)

  return (
   <div>
     <Header 
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}/>
   </div>
  )
}

export default App
~~~

- Lo extraigo en el Header por las props
        
         NOTA:
         Este proceso se da infinidad de veces, por lo que se da por entendido;
            cuando digo "se lo paso por props a" significa este proceso


# IMPORTANTE
   
            A no ser que se especifique lo contrario, se da por entendida
            la obligatoriedad de importar los hooks from 'react' para usarlos 
            y la importación de componentes para su uso en otros componentes.

--------
- Se lo paso por props a NuevoPresupuesto que está en el header.
~~~jsx
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}/>
    </header>
  )
}

export default Header
~~~

- entonces, ahora presupuesto y setPresupuesto está disponible en NuevoPresupuesto,
- Lo desestructuro de las props

~~~js
import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
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
~~~

- Puedo ver en componentes de devtools de firefox como está disponible

![Captura12](./Captura12.png)

- El valor del state inicializa en 0. 
- Lo coloco en el value del input del formulario
~~~js
 <input
          className="nuevo-presupuesto"
          type="text"
          placeholder="Añade tu presupuesto"
          value={presupuesto} />
~~~
- Como voy a ir escribiendo en el input, debe poder modificarse el state
- Para poder manejar lo que escribo, uso el onChange
- Siempre entre llaves por ser una operación de javascript, lo manejo con un callback
- Como escribo en el input, le puedo pasar e, y en el setPresupuesto el e.target.value
- Así lo que se escribe se visualiza en pantalla y se agrega en el state que esta en App

![Captura15](./Captura15.png)


Ahora si le agrego 100 en el formulario lo tengo en el state de App
![capture13](./Captura14.png)





