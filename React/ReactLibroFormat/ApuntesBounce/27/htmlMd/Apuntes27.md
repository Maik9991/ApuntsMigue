# Agregando una gráfica
- Uso npm i react-circular-progressbar
- importo en ControlPresupuesto CircularProgressbar from 'react-circular-progressbar'
- y los estilos 'react-circular-progressbar/dist/styles.css 
- Donde dice gráfica aqui coloco el componente  CircularProgressbar
- El circulo está totalmente lleno, hay que pasarle un value por props
- Pongo value = {50} en las props se queda a la mitad
- La idea es que este value se actualice mediante el state
- Declaro un nuevo state, porcentaje y setPorcentaje, y el useState en 0
- Hago una regla de tres para calcular el tanto por ciento entr el presupuesto y lo gastado
- Declaro en el useEffect una nueva variable
- Lo envuelvo todo entre paréntesis con el toFixed en 2 para que solo tenga dos dígitos decimales como máximo

~~~js
const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto) *100)).toFixed(2)

~~~

Para actualizar esta gráfica usaré el setPorcentaje con porcentaje en el useEffect
~~~js
  useEffect(() => {
      const totalGastado = gastos.reduce((total,gasto)=> gasto.cantidad - total, 0)
     const totalDisponible= presupuesto - totalGastado;
const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto) *100)).toFixed(2)

setPorcentaje(nuevoPorcentaje)     

     setDisponible(totalDisponible)
      setGastado(totalGastado)
    }, [gastos])
~~~
Puedo ponerle un setTimeOut para que después de un segundo y medio haga la animación
~~~js

setTimeOut(()=>{
setPorcentaje(nuevoPorcentaje)

}, 1500)
~~~

- Puedo añadirle estilos a la gráfica via props
- Para añadir un texto 
~~~~js
<CircularProgressbar
    styles={buildStyles({
        pathColor:'#3B82F6',
        trailColor:'#F5F5F5'
    })}
    value={porcentaje}
    text={`${porcentaje}% gastado `} 
    textColor='#3B82F6'/>
~~~~


