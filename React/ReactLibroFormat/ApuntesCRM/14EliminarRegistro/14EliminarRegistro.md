# Eliminar Registro
- Me situo en Inicio.jsx ya que hay tengo el state de cliente
- Para que también desaparezca del DOM voy a usar setClientes
- Defino handleEliminar, se lo paso por props a Cliente y lo extraigo 
- Lo coloco en el botón borrar en un arrow function y la invoco porque le voy a pasar un id

~~~~js
     <button
                className="bg-red-600 hover:bg-red-700 block 
                w-full text-white p-2 uppercase font-bold text-xs mt-3"
                type="button"
                onClick={()=>handleEliminar()}>Borrar</button>
~~~~
- Para probar si funciona, presiono eliminar y debería mostrar el console.log que le puse de prueba
- Requiero el id que previamente ya lo extraí por desestructuración en Cliente
- Entonces le digo a la función en Inicio que va a llevar un id, que lo imprima para ver si funciona

~~~js
  const handleEliminar=(id)=>{
    console.log("Eliminando...", id)
  }
~~~
- Escribo un confirm. Ahora tengo un valor de true o false si confirmo o cancelo para usarlo para llamar a la API
~~~js
 const handleEliminar=(id)=>{
    const confirmar = confirm("Deseas eliminar este cliente?")
    console.log(confirmar)
  }
~~~

- Uso el método DELETE. La API funciona con id
- No guardo el resultado pq no me interesa, el await resp.json() lo elimina
- location.reload() refresca la página, pero no es buen método
~~~js
 const handleEliminar= async (id) => {
     const confirmar = confirm("Deseas eliminar este cliente?")
    if(confirmar){
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const resp= await fetch(url,{
          method: 'DELETE'
        })
        await resp.json()
        location.reload()

      } catch (error) {
        console.log(error)
      }
  }
}
~~~
>Es mejor actualizar el state

Le digo en el Array que quiero que me traiga a todos los clientes distintos al que estoy eliminando 

~~~js
await resp.json()
        const arrayClientes = clientes.filter(cliente=> cliente.id !== id)
        setClientes(arrayClientes)
~~~~








