# Creando State de Gastos
- Importo useState en Modal, obvio
- Creo el state del input "nombre" en Modal fuera del return
- Es importante asociarlo entre llaves en el value del html con el mismo nombre para sincronizarse con el state
- Para actualizar el state cada vez que el usuario escriba algo uso el onChange
        - y le paso e para usar el e.target.value para que escriba en la variable nombrelo que el usuario escriba en el input
![Captura50](./Captura50.png)

- Puedo ver en componentes que lo que escribo se escribe en el state
![Captura51](./Captura51.png)

- Si dejara el value vacío no me dejaría escribir en el input porque le estoy diciendo que esta vacío. 
- Al ponerle esa variable de nombre, lo va colocando en el state y va detectando los cambios y lo va agregando dentro del value de este input.
- De esta forma puedo ir leyendo este campo
- Hay que hacer lo mismo con cantidad y categoria
![Captura52](./Captura52.png)

- Puedo comprobar en components de devtools que los 3 states de Modal se llenan satisfactoriamente

![Captura53](./Captura53.png)

En value ya se pusieron las categorías y eso es lo que va a leer la computadora: ahorro, comida, ocio, etc