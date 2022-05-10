# Componente Control Presupuesto

- Creo el componente ControlPresupuesto.jsx
- Las clases estan definidas previamente en el archivo CSS

~~~js
import React from 'react'

const ControlPresupuesto = () => {
    return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> $200
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
~~~

- Debo importarlo en el Header que es dónde tengo la carga condicional de componentes
- Reemplazo el párrafo que había por el componente

![Captura25](./Captura25.png)

- Aparece así ahora
![Captura26](./Captura26.png)

- En el Header tengo presupuesto, puedo pasarlo via props y añadirlo al componente

![Captura27](./Captura27.png)

~~~js
  <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> ${presupuesto} 
            </p>
        </div>
~~~

- Lo próximo es formatear la cifra de dinero para que aparezca correctamente
