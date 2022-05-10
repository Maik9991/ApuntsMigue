# Primeros Pasos Custom Hook

- Un caso de Custom Hook es para poder reutlizar una función, pero para eso están los helpers
- La ventaja de los hooks es incorporar el state y el valor de una función de forma persistente
- El código personalizado puede aventajarse con react, integrando states, effects e integrar otros hooks 
- Va a ser reutilizable en otros proyectos o lugares del proyecto
- Deben iniciarse con use
- Es una función común y corriente al fin y al cabo

- Creo useSelectMonedas con una función de flecha y un console.log
- Lo introduzco en un arreglo en el return

~~~js
import React from 'react'

const useSelectMonedas = () => {
  
    const SelectMonedas = ()=>{
        console.log("Desde SelectMonedas")
    }
    return [SelectMonedas]
}

export default useSelectMonedas

~~~

- Para poder usar la función hay que extraerla y mandarla llamar
- Lo importo y la extraigo dentro de formulario, fuera del return
- Compruebo que imprime en consola

~~~js
const [selectMonedas] = useSelectMonedas()
selectMonedas()
~~~
-----

> Cambio las llaves de SelectMonedas por unos paréntesis para hacer un return implícito
- Introduzco un fragments y dentro un label. 

![Foto6](./Foto6.png)

Lo coloco con sintaxis de componente en el form. Lo renderiza en pantalla

~~~~js
  return (
      <form>
        
        <SelectMonedas />
         
          <InputSubmit type="sumbit"
          value="cotizar" />
      </form>
  )

~~~~

- Puedo ponerle de valor inicial del custom hook es el label
~~~js
const [SelectMonedas] = useSelectMonedas('Elige tu moneda')
~~~

Este texto se pasa a la función y le puedo decir que es el label e imprimirlo entre llaves

![Foto7](./Foto7.png)

- Importo styled para dar estilo con un SC al label en useSelectMonedas.jsx
- Lo coloco, donde había label ahora hay Label

~~~jsx
 const SelectMonedas = ()=>(

        <>
            <Label>{label}</Label>
        </>

    )
~~~






