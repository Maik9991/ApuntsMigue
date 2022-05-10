# Resetear base de datos
- Si quiero borrar solo una coleccion uso .drop

        C:> db.usuarios.drop()

- Para borrar la base de datos entera

        C:> db.dropDatabase()

# Ejemplo sin esquema fijo

    C:> db.nuevosUsuarios.insertOne( {libro: "Carry", precio: 5.99 } )
    
    C:> db.nuevosUsuarios.insertOne( {titulo: "Perci", páginas:59, opiniones:{
        una: "fatal",
        dos: "brutal" }} )

Tengo 2 documentos con schemas totalmente diferentes

# Estructurando los documentos: schema o no schema?

Se puede usar la estructura SQL con algo más de flexibilidad, donde se repiten los más importantes y hay algunos que están o no.
Se puede hacer también totalmente estricto a lo SQL con la ventaja de la flexibilidad de añadir otros campos o no

# Tipos de datos en MongoDB
- Texto
- Boolean
- Numero
    - int: 25
    - Long: 2376237263
    - Decimal: "1000.55"
    - Los numeros Mongo los guarda como float

- ObjectId: son objetos con una parte temporal
- Fecha
    - ISODate: ISODate("2020-10-10")
    - TimeStamp: Timestamp(19873923,1)
- Documento incrustado
- Array(Matriz)


A veces los numeros long, al guardarlos javascript como float, deja una cola de 0 en lugar de los números (en este caso 1234). Si tiene más de x números es conveniente guardarlo en formato Decimal

        C:> db.nuevosUsuarios.insertOne( {objeto:"lo que sea", caja: 209387813712831234 fecha: new Date (),insertado: new Timestamp() } )

Puedo usar db.stats() para obtener la info de la db

        C:> db.stats()

AvgObjSize: es el tamaño promedio de los documentos
Si transformo el número con NumberInt optimizo ya que reduce el AvgObjSize
        
        C:> db.numbers.insertOne({a:NumberInt(1)})

- Puedo usar typeof y extraer la a

        C:> typeof db.numbers.findOne().a


Para borrar tienda entro con use tienda y uso db.dropDataBase()
