import { useState, useEffect } from "react"
import Formulario from "./Formulario"
import Item from "./Item"

export default function Colores() { // el export default puede ponerse delante de la funcion o al final de ella
    
    // 

    let [colores,setColores] = useState([  ])

    useEffect(() => {
        fetch("https://api-bx2j.onrender.com/api-colores")
        .then(respuesta => respuesta.json())
        .then(colores => setColores(colores))
    }, []) //al dejar estos corchetes vacios estamos indicando que se ejecute los de las {} solo cuando todo lo del compoenente esté cargado

    function nuevoColor(color) {
        setColores([...colores,color])
    }

    function borrarColor(id){
        setColores(colores.filter(color => color.id != id))
    }


    return (
        <>
        
            <Formulario nuevoColor={nuevoColor} />
            
            <ul>
                { colores.map( color => <Item key={color.id} id={color.id} r={color.r} g={color.g} b={color.b} borrarColor={borrarColor} /> ) }
                
            </ul>
            
        
        </>
    )
}

/*

aqui tambien puede ir el export default asi:
export default Colores

Cuando solo se exporta una sola cosa hay que poner el "default", pero si hay muchas cosas que esportar solo pondriamos:
export Colores
export Otro
export Otromas
...

*/