# Creando las Páginas Necesarias

- Me sitúo en NuevoCliente
- Retorno un fragment 
- Le añado negrita, tamaño grande, color azul 400
- También un párrafo con padding-top de 10
~~~js
    <>
        <h1 className= "font-black text-4xl text-blue-400">Nuevo Cliente</h1>
        <p className="mt-3">Llena los siguientes campos para registrar un cliente</p>
    </>
~~~

- Le añado un padding al Outlet de 10
~~~~html
 <div className="md:w-3/4 p-10">
        <Outlet />
          
        </div>
~~~~

- Creo la carpeta components y el componente formulario con un h1
- Lo importo en NuevoCliente y lo visualizo
- Le agrego unas clases: texto gris, bold, un poco más grande, en mayúsculas y centrado
- Lo meto en un div con las clases color de fondo blanco
    - margin-top: 10
    - padding x de 5, 10 de y
    - esquinas redondeadas medium y sombreado medium
    - Y un md de mediaquery, un width de 3/4
    - Lo centro con un margin x auto
~~~js
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
    <h1 className="text-gray-600 font-bold text-3xl uppercase text-center">
        Formulario
    </h1>
    
    </div>
~~~
- Ahora voy a incorporar una librería para manejar los formularios


