# Finalizando Efecto Swipe
- Quito las llaves de las funciones leadingActions y trailingActions y lo cambio por unos paréntesis, que significan un return implícito
- Dentro de cada función coloco el componente que corresponde
- Coloco el componente SwipeAction que tiene un onClick obligatorio
- Por ahora pongo un console.log, pero es dónde irá la función de editar
- En el children escribo Editar
~~~js
 const leadingActions = () =>(
        <LeadingActions>
            <SwipeAction onClick={()=> console.log('editar..')}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
~~~
- Tengo que llamar esas funciones
~~~js
  <SwipeableList>
          <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}>
~~~
- Si arrastro hacia la derecha puedo ver Editar 
![Captura87](./Captura87.png)

- Hago lo mismo con trailingActions, pongo un console.log en el onClick de SwipeAction que será la función de eliminar y pongo Eliminar en el children

![Captura88](./Captura88.png)

Veamos como editar después de darle al swip en la siguiente lección