# Detectando Gasto a Editar
- Para detectar el gasto a editar usaré un state en el App.jsx
- Lo inicio como un objeto y se lo paso via props a ListadoGastos y a Gasto

        Corrección: en el .reduce puse gasto.cantidad +total y es - total

~~~js
const totalGastado = gastos.reduce((total,gasto)=> gasto.cantidad - total, 0)
~~~

- Coloco el setEditarGasto en lugar del console.log del SwipeAction y dentro el objeto gasto
- Ahora es cuando miro el state en components de devtools en App.jsx que es un objeto vacío y que cuando deslizo el componente se llena el state con el objeto gasto

- Para abrir el modal usaré un useEffect. Va a estar escuchando los cambios en gastoEditar, lo coloco en las dependecias
- Lo importo en App.jsx
- Siempre se va a ejecutar una vez, por lo que hay que verificar que gastos tenga algo
- Usaré Object.keys con el .length para verificar que editarGasto tiene algo
- Uso el console.log para verificar que cuando muevo el gasto a editar, aparece en consola
~~~js
 useEffect(()=>{
    if(Object.keys(gastoEditar).length){
      console.log('gasto tiene algo')
    }
~~~
- Efectivamente. Cambio el console.log por el handleNuevogasto()
~~~js
 useEffect(()=>{
    if(Object.keys(gastoEditar).length){
      handleNuevoGasto()
    }
~~~
- Lo próximo será pasarle el objeto, y si tiene algo que llene el formulario automáticamente