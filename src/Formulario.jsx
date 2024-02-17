import { useState } from "react"

function Formulario({nuevoColor}) {

    let [texto, setTexto] = useState("")
    let [error, setError] = useState(false)
    let [mensajeError, setMensajeError] = useState("")

    return (

        <form onSubmit={evento => {
            evento.preventDefault()

            // ----Validacion del texto:INICIO----//

            setMensajeError("El campo no puede estar en blanco")
            setError(false)

            let valido = /^([0-9]{1,3},){2}[0-9]{1,3}$/.test(texto);

            if(valido){

                let [r,g,b] = texto.split(",").map(n => Number(n));

                [r,g,b].forEach(n => valido = valido && n <= 255); // validacion en cadena
                // por cada valor del array que ahora es un numero y no un string, variamos si valido sigue siendo true solo si n es menor a 255 (n es el numero del array en cada vuelta). En el momento en el que un solo numero no sea menos de 255, valido habrá cambiado su estado a false, por lo que el foreach sera ya siempre false porque solo podria ejecutarse si valido es true (porque no lleva ! en la funcion)

                if(valido) {
                    
                    return fetch("https://api-bx2j.onrender.com/api-colores", {
                        method: "POST",
                        body: JSON.stringify({r,g,b}),
                        headers: {
                            "Content-type" : "application/json"
                        }
                    })
                    .then(respuesta => respuesta.json())
                    .then(respuesta => {
                        
                        if(respuesta.id){
                            let {id} = respuesta
                            nuevoColor({id,r,g,b})
                            return setTexto("")
                        }
                        setMensajeError("Ha ocurrido un error")
                        setError(true)

                    })

                }

                setMensajeError("Deben ser numeros entre 0 y 255 separados por comas")

            }

            setError(true)

            // ----Validacion del texto:FIN----//


        }}>
            <input
            type="text"
            placeholder="rrr,ggg,bbb"
            value={texto}
            onChange={evento => setTexto(evento.target.value)}
            />
            <p className={ `error ${ error ? "error-visible" : ""}`  }> {mensajeError} </p>

            <input type="submit" value="Crear color" />

        </form>

    )
}

export default Formulario

// Al tener solo un elemento dentro del return n ohace falta poner las etiquetas vacias <> </>