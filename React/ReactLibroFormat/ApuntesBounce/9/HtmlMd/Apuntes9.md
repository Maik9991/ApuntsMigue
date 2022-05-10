# Primeros Pasos para el Modal

- Añado en el botón que puse en App.jsx un onClick con la función handleNuevoGasto que no he creado todavía
~~~jsx
<div className="nuevo-gasto">
       <img  src={IconoNuevoGasto} alt="icono-gasto"
       onClick={handleNuevoGasto}
       />
     </div>
~~~
- Declaro la función y le añado un console.log para ver si funciona cuando hago clic en el botón
~~~jsx
  const handleNuevoGasto = () =>{
    console.log("añadiste un nuevo gasto")
  }
~~~
- Lo que hará es mostrar una ventana modal. Para ello creo un nuevo state con modal y setModal
- El state iniciará con un false, para que yo cambie el state a true con el setModal en el handleNuevoGasto

~~~jsx
  const handleNuevoGasto = () =>{
    setModal(true)
  }
~~~
- Si voy a components de devtools veo que tengo un nuevo state en App.js que cambia a true cuando hago clic en el botón
- Tengo el state de la cantidad, el state de isValidPresupuesto y el state de modal

![Captura33](./Captura33.png)

- Ahora, puedo usar modal como valor para mostrar la ventana modal
![Captura34](./Captura34.png)

- Evidentemente el párrafo será el componente. Ahora puedo ver que aparece el párrafo si hago clic en el botón

![Captura35](./Captura35.png)