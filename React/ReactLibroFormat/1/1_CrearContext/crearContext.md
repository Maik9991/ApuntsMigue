# Crear Context

- Importo la función createContext de react
~~~js
import createContext from 'react' 
~~~
- Fuera del componente creo el context
~~~js
const BebidasContext = createContext()
~~~
Dentro del return del componente, le añado el provider con el value por defecto y el children
~~~js
<BebidasContext.Provider
    value={ { } }>
    
    {children}

</BebidasContext.Provider>
~~~
- Le añado las children con desestructuración como argumento al componente
- Exporto el componente, el Context por default
~~~js
export{
    BebidasProvider
} 

export default BebidasContext
~~~
- Ahora puedo crear el custom hook para no tener que ir importando el Context
- Creo el hook useBebidas 
- Importo useContext de react entre llaves  y el BebidasContext sin llaves
- Lo meto en el return con el context
~~~js
import {useContext} from 'react'
import BebidasContext from '../components/context/BebidasProvider'

const useBebidas = ()=>{
    
    useContext(BebidasContext)
    }
~~~
- Envuelvo la App en el Provider: IMPORTANTE!!
~~~js
import {BebidaProvider} from "../components/context/BebidasProvider'

function App() {
    return (
    <BebidasProvider>
      
      <AppBebidas />
      
    </BebidasProvider>
  )
}

export default App
~~~
- El componente de Provider queda así, con children en las props
~~~jsx
import { createContext } from 'react'

const BebidasContext = createContext()

const BebidasProvider = ({children})=>{

    return(

        <BebidasContext.Provider
            value={{}}>
            
            {children}
        
        </BebidasContext.Provider>

    )
}

export {
    BebidasProvider
}
export default BebidasContext
~~~