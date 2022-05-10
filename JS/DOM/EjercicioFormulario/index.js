
let operacion= function (){
    var valor = 0;
    return function (){
        return valor += 5
    }
}

function wr(x){
    document.write(x+"<br/>")
}



//console.log(resultado())
//console.log(resultado())

//wr("Hola")
//wr("Adiós")



function crearSumador(n){
    return function(m){
        return n+m
    }
}

let suma10 = crearSumador(10)
let suma20 = crearSumador(20)

console.log(suma10(5))

/////////////////////

function crearTamanos (pixeles){
    return function(){
        document.body.style.fontSize= pixeles+'px'
    }
}

let tamano14= crearTamanos(14)
    tamano26= crearTamanos(26)
    tamano38 = crearTamanos(38)

document.getElementById("tamano14").onclick = tamano14;
document.getElementById("tamano26").onclick = tamano26
document.getElementById("tamano38").onclick = tamano38


document.querySelector('#button').addEventListener("click", ()=>{
    open('https:www.google.es')
})

if(screen.width <= 768){
    alert("Hola")
}