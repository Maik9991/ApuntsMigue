# Colocar el presupuesto en el LocalStorage

- El presupuesto solo lo defino una vez, y queda almacenado en la variable presupuesto
- Puedo poner un useEffect que este escuchando presupuesto en App.jsx
- Le llamo presupuesto, le coloco presupuesto y en caso de que no exista un 0

~~~~js
useEffect(()=>{

    localStorage-setItem('presupuesto', presupuesto ?? 0)

}, [presupuesto])
~~~~

![Captura5](./Captura5.png)

- Para que el navegador arranque con el presupuesto del localStorage voy al useState
- Y si no existe, le va a agregar un 0
- Como el useeffect va a ejecutarse al menos una vez, si no hay nada en el localStorage, agregará un 0
~~~js
  const [presupuesto, setPresupuesto] = useState(
   Number( localStorage.getItem('presupuesto') ?? 0)
  ) 
~~~

- Ahora , si reinicio el navegador aparece la primera página con el presupuesto que puse anteriormente, pero ahora ya no necesito esta primera página.
- Puedo crear un useEffect que se ejecute una sola vez para que lea el localStorage, y si vuelve a cargar que inici en 0
- Si presupuestoLocalStorage es mayor que cero es un presupuesto valido
- Usé el isValidPresupuesto para hacer aparecer la segunda página, lo puedo emplear aquí
~~~js

  useEffect(()=>{
    const presupuestoLocalStorage = Number(localStorage.getItem('presupuesto')?? 0)
    if(presupuestoLocalStorage > 0){
        setIsValidPresupuesto(true)
    }
  }, [])
  
~~~

# Almacenar los Gastos en el LocalStorage
- Muy similar al código anterior
- Pero en el localStorage no pueden guardarse arreglos, solo strings o números
~~~js
  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])
~~~
- Se almacena en el localStorage pero si recargo se pierde el gasto porque se efectua una sola vez. Ve un arreglo vacío y dice, lo voy a a gregar al localStorage.
- Por lo tanto, hay que modificarlo tambien en el state
- Con JSON.parse cambio el string a un arreglo, y si no hay nada, que devuelva un arreglo vacío
~~~js
 const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])
~~~

![Captura6](./Captura6.png)
