function Item({id,r,g,b,borrarColor}) {
    return (
        
        <li style={ { backgroundColor : `rgb(${[r,g,b].join(",")})` }} onClick={ () => {
            fetch(`https://api-bx2j.onrender.com/api-colores/${id}`, {method : "DELETE"})
            .then(respuesta => respuesta.json())
            .then(respuesta => { 
                if(respuesta.resultado == "ok"){
                    return borrarColor(id)
                }
                console.log("mostrar error")
             })
        }}> {[r,g,b].join(",")} </li>
        
    )
}

export default Item

// Al tener solo un elemento dentro del return n ohace falta poner las etiquetas vacias <> </>