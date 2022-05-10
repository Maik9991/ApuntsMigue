# Formatear Números a Dinero

- Javascript tiene una API relativamente nueva para formatear a dinero
- Si cantidad = 6000 la sintaxis sería

        cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
- 'en-US' el idioma, y abre objeto de configuración
- style: dinero 'currency', y qué tipo? dólares américanos 
        
        IMPORTANTE: NO VA A MUTAR EL STATE ORIGINAL
        cantidad sigue siendo 6000
- Entonces puedo crear la función en ControlPresupuesto
~~~~jsx
const formatearCantidad =(cantidad) =>{
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
  })
  }
~~~~
Y aplicarla en presupuesto
![Captura29](./Captura28.png)

Queda así
![Captura30](./Captura30.png)

- Copio el span dos veces para hacer el Disponible y otra para el Gasto
- No está la funcionalidad implementada, hay que añadir el modal para gastos
![Captura31](./Captura31.png)


