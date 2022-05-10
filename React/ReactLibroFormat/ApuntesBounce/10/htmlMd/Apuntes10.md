# Modal

- Creo el nuevo componente Modal.jsx
- Le añado un párrafo y lo importo y coloco en App.jsx donde estaba el párrafo
~~~js
const Modal = () => {
  return (
    <div className="modal">
        <p>Desde Modal</p>
    </div>
  )
}

export default Modal
~~~

![Captura36](./Captura36.png)

- Ahora si defino un presupuesto y le doy clic al icono + se oscurece todo por la clase de modal de CSS, y aparece Desde modal en la esquina superior izquierda

- Ahora quiero definir la acción de cerrar el modal
- Para ello creo un nuevo div con la clase cerrar-modal e importo el icono.
- Lo inserto en un img
- Le agrego la acción con el onClick y creo una nueva función llamada ocultarModal
- Necesito el setModal para pasarlo a false y cerrar el Modal, se lo puedo pasar por props

![Captura37](./Captura37.png)

- Ahora cuando clico la x de la esquina superior derecha se cierra la ventana modal 
Y DESAPARECE LA OSCURIDAD!

