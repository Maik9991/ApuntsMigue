# Actualizando la API

- Para actualizar debo usar el método PUT
- Puedo usar la condición de si hay cliente.id para usar el método PUT
- Pongo la url con back ticks y añado el id dinámico al final, tal y como pide la API
en el else pongo la petición GET. Es prácticamente le mismo código

~~~js
const handleSubmit=async(valores)=>{
    try {
        if(cliente.id){
        const url=`http://localhost:4000/clientes/${cliente.id}`

      const respuesta = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(valores),
        headers:{
          'Content-Type':'application/json'
        }
      })
        const resultado = await respuesta.json()
        navigate('/clientes')

     }else{
      const url="http://localhost:4000/clientes"

      const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(valores),
        headers:{
          'Content-Type':'application/json'
        }
      })
        const resultado = await respuesta.json()
        navigate('/clientes')

     }
    } catch (error) {
      console.log(error)
    }
  }
~~~~