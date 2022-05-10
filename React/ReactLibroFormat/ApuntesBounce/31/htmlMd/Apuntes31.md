# Resetear la app
- Le paso setGastos al header via props, setPresupuesto ya lo tengo
- También me hará falta el isValidPresupuesto para volverlo false
- Se los paso a ControlPresupuesto
- Le coloco un button donde me pique con el texto de ResetearApp, de type button
- en el onClick le añado la función handleResetApp
- Le pregunto con confirm si realmente quiere resetear, devuelve true o false


~~~~jsx
const handleResetApp = ()=>{
    const resultado = confirm("realmente deseas reiniciar presupuesto y gastos?")

    if(resultado){
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    }else{

    }
}
~~~~
En el localStorage también esta vacío gracaias al useEffect que dice que si presupuesto o gastos cambian lo sincronice con lo que hay en el state
