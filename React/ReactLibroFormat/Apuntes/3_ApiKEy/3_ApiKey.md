# APIKEY como varianle de entrono

- En el directorio raíz, añado un archivo llamado .env
- Como uso vite, la sintaxis es

        VITE_API_KEY= cf0a5ab8d26d66e27d91dc742ee8eae2

- Para imprimirlo en consola
        
        console.log(import.meta.env.VITE_API_KEY)

# Consultando el Clima en la API

- Instalo AXIOS y lo importo en el provider
- Hago un try y un catch y desestructuro ciudad y pais para hacerlos por separado
- Guardo el apiKey en una variable llamada appId
- Guardo en una url con un template string la consulta a la API e inyecto ciudad y pais

- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

Queda asi, lo pruebo con un console.log!
~~~~js
const consultarClima= async (datos) =>{
      try {
          const {ciudad, pais} = datos
          const appId= import.meta.env.VITE_API_KEY
          const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

          console.log(url)

      } catch (error) {
          console.log(error)
      }
  }
~~~~
- Si copio y pego la url en consola en la barra de navegación, sale el objeto JSON
Lo que interesa es extraer latitud y longitud
~~~js
try {
          const {ciudad, pais} = datos
          const appId= import.meta.env.VITE_API_KEY
          const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
          const {data} =  await axios(url)
          
          console.log(data)
      }
~~~
- Devuelve un arreglo, yo le puedo especificar la posición 0 entre corchetes, donde esta lat y long
- Extraigo la latitud y la longitud
~~~js
const {lat, long} = data[0]
~~~
- Ahora falta la url para consultar el clima
- La url es esta
- https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

- Necesito extraer data pero ya la tengo declarada, renombro
~~~js
 const {lat, long} = data
          const urlClima= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
          const {data: clima} = await axios(urlClima)
~~~

- Inicio el state con resultado, setResultado y un objeto vacío
- Cambio el console.log de clima por setResultado y paso resultado al provider
- Creo el componente Resultado.jsx y lo importo en AppClima
- Quiero que se muestre si ya hay resultado
- Importo el hook para el context
- Cuando vas a renderizar un objeto e inicia  vacío siempre se mostrará.
- Es conveniente añadirle un ? y hacer la evaluación con .name o similar
~~~js
<main className="dos-columnas">
        <Formulario />

      {resultado?.name &&  <Resultado/>}
      
    </main>
~~~

~~~js
const Resultado = () => {
    const {resultado} = useClima()
    const {name} = resultado
  return (
    <div className="contenedor">
        <h2>El clima de {name} es: </h2>
    </div>
  )
}
~~~
El resto es mostrar la info que viene en resultado. 
En el main vienen las temperaturas