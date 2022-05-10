# Instalar Swip

- npm install react-swipeable-list
- este repositorio depende de prop-types. Lo installo también: npm i prop-types

- Lo importo en Gasto y tambien la hoja de estilos
        
        import {LeadingActions,
                SwipeableList,
                SwipeableListItem,
                TrailingActions} from 'react-swipeable-list'
        import 'react-swipeable-list/dist/styles.css'

- Rodeo todo el div despues del return con SwipeableList y SwipeableListItem
![Captura86](./Captura86.png)

- Necesito pasarle dos props a SwipeableListItem para que haga el efecto de moverse
    -leadingActions y trailingActions, son las acciones de deslizar

~~~js
          <SwipeableListItem
          leadingActions={leadingActions}
          trailingActions={trailingActions}>
~~~
- Las defino fuera del return

~~~js
const leadingActions = () =>{
        console.log('Editar')    
    }
    const trailingActions =()=>{
        console.log('Borrar')
    }
~~~

- Ahora puedo moverlo a derecha e izquierda. Es necesario definir este para de funciones
- Dan erroren consola porque no deben enviar nada a consola, si no utilizar los componentes que hay importados. En el siguiente capítulo
