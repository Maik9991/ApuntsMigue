# Mostrar Tabla

- Copio el fragment con los estilos de Nuevo Cliente y cambio los párrafos
- Le añado unas clases. Table-auto para cuando el resize las columnas se adapten
- Creo un thead y un tbody. El thead es la parte superior es para que corresponde cada columna. El body es dónde irán mis clientes

- Coloco un tr con varios th
- Coloco clientes entre llaves y lo mapeo. Pongo un return implicito en el .map y dentro un nuevo componente llamado Cliente
- Creo cliente, lo importo en Inicio y lo coloco en el .map con el id como key
- Le paso por props cliente al componente Cliente, de esta manera lo desestructuro y lo tengo disponible en Cliente para rellenar los campos con jsx

~~~js
 return (
    <>
    <h1 className= "font-black text-4xl text-blue-400">Clientes</h1>
    <p className="mt-3">Administra tus clientes</p>
    
    <table className="w-full mt-5 table-auto shadow bg-white"></table>
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Contacto</th>
          <th className="p-2">Empresa</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente=>(
          <Cliente 
          key={cliente.id}
          cliente={cliente}/>
        ))}
      </tbody>
   
</>
  )
~~~

~~~js
const Cliente = ({cliente}) => {
  return (
    <h1>{cliente.nombre}</h1>
  )
}
~~~

# Mostrando la info de clientes
- Hay que extraer todas las propiedades del objeto cliente
- Construyo con html y clases el componente, con sus botones
- La clase border añade borders
~~~js
const Cliente = ({cliente}) => {
  
  const {nombre, empresa, email, telefono, notas, id} = cliente
  
  
    return (
        <tr className="border-b hover:bg-gray-200 cursor-pointer">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                
                <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                
                <p><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono}</p>
            
            </td>
            
            <td className="p-3">{empresa}</td>
            <td className="p-3">

                <button
                className="bg-yellow-600 hover:bg-yellow-700 block 
                w-full text-white p-2 uppercase font-bold text-xs"
                type="button">Ver</button>
                
                <button
                className="bg-blue-600 hover:bg-blue-700 block 
                w-full text-white p-2 uppercase font-bold text-xs mt-3"
                type="button">Editar</button>
                
                <button
                className="bg-red-600 hover:bg-red-700 block 
                w-full text-white p-2 uppercase font-bold text-xs mt-3"
                type="button">borrar</button>
                
            </td>

        </tr>
  )
}

export default Cliente
~~~~