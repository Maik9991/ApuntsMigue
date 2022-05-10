# Añadiendo el Formulario de Gastos

- Agrego un div con la clase campo y un input. Lo duplico. Son los campos del formulario nuevo gasto

![Captura46](./Captura46.png)

- De momento los dos campos lucen así
![Captura45](./Captura45.png)

- Introduzco otro div con el menú contextual select y las diversas opciones

![Captura47](./Captura47.png)

- Añado el input al final
~~~jsx
 <form className={`formulario ${animarModal ? "animar":'cerrar'}`}>
          <legend>Nuevo Gasto</legend>
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>

            <input type="text"
                     id="nombre" 
                  placeholder="Añade el nombre del gasto"/>
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>

            <input type="number"
                     id="cantidad" 
                  placeholder="Añade la cantidad"/>
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            
            <select name="" id="categoria"> 
              <option value="">--Seleccione</option>              
              <option value="ahorro">Ahorro</option>              
              <option value="comida">Comida</option>              
              <option value="casa">Casa</option>              
              <option value="gastos">Gastos Varios</option>              
              <option value="ocio">Ocio</option>              
              <option value="salud">Salud</option>              
              <option value="suscripciones">Suscripciones</option>              
            </select>
          </div>
          <input type="submit"
                value="añadir gasto" />
        </form>
~~~
- Ahora el Modal luce así
![Captura49](./Captura49.png)

El siguiente paso es agregar un state para cada uno de estos campos, se puede hacer también con un objeto y hacer la validación.