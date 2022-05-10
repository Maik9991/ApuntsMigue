# Mostrando el Icono de Gastos

- Voy a inmportar todas las imagenes.
- Luego a generar un diccionario de iconos con el value de la categoría

![Captura79](./Cpatura79.png)

- Como estoy extrayendo la categoría, cuando muestre la categoría va a ser la posición de este diccionario, y va a tomar directamente su icono, así funcionan los objetos en Javascript.

- Debajo de contenido-gasto inserto una imagen con img src
- Le digo: quiero que este diccionario de Iconos muestre según la posicion de la categoría que tenga ese gasto.
![Captura80](./Captura80.png)

Ahora el problema es que cuando pongo varios gastos, el modal aparece arriba y tengo que darle al scroll. Esto es por los estilos, ya que esta situado en el top

![Captura81](./Captura81.png)

- Para solucionarlo voy a App.jsx y le agrego un ternario en el className del Header
- Si modal está en true añade la clase definida en CSS fijar, si no nada
- La clase fijar tiene el overflow:hidden y el height: 100vh, hace un reset

![Captura82](./Captura82.png)

- Ahora cada vez que doy al icono de nuevo gasto se planta automáticamente arriba

