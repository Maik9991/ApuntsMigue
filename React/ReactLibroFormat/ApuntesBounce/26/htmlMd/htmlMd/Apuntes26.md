# Resetear el State al Finalizar un Gasto Editado

- Cuando Edito se llena uno de los states con el objeto
- Cuando dejo de editarlo y cierro el modal, el state sigue lleno.
- Además, si hago un cambio en el código, se carga este automáticamente
- Hay que setearlo con un objeto vacío.
- Para que no cargue el Modal envío el setGastoEditar via props a el Modal y cuando se oculte el modal lo seteo a objeto vacío

![Captura3](./Captura3.png)

- Para vaciar el state al editar, voy a App.jsx dónde tengo el guardarGasto, en la parte de editar, le pongo el setGastoEditar con un objeto vacío

![Captura4](./Captura4.png)
