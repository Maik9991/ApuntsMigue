# Inicio

- Creo las carpetas hooks, context y components. 
- Creo AppClima.jsxen la carpeta components y la renderizo en App.jsx
- Lo hago para poder acceder al state desde este componente a todos los demás
- Creo un Formulario y lo incorporo a AppCLima. Lo importo y lo renderizo en un main

-----

- En el formulario añado un contenedor con un form y un div con la clase campo
- Pongo un label, un select...queda así
~~~js
import React from 'react'

const Formulario = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor='ciudad'>Ciudad</label>
          <input 
          type="text"
          id="ciudad"
          name="ciudad"/>
        </div>
        <div className="campo">
          <label htmlFor='Pais'>País</label>
          <select id="pais"
                  name="pais">
              <option value="">Seleccione el país</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
              <option value="CO">Colombia</option>
              <option value="AR">Argentina</option>
          </select>
        </div>
        <input type="submit"
                value="BUSCAR"/>

      </form>
    </div>
  )
}

export default Formulario
~~~ 