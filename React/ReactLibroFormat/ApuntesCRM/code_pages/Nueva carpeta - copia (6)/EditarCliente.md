~~~~js
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
  const {id} = useParams()
 

  useEffect(()=>{
      const ObtenerClienteApi= async()=>{
          try {
              const url=`http://localhost:4000/clientes/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
             console.log(error) 
          }

      }  
      ObtenerClienteApi()

  },
  [])
  return (
    <>
    <h1 className= "font-black text-4xl text-blue-400">Editar Cliente</h1>
    <p className="mt-3">Utiliza este formulario para editar a un cliente</p>
   
   {cliente.nombre ?(

       <Formulario 
            cliente={cliente}/>
   ): "No hay un cliente con ese id"
   
   }
  </>
  )
  
}

export default EditarCliente
~~~