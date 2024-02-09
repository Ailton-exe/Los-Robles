import "./Formulario.css"
import { Correo } from "./Correo"
import { useState } from "react"
import { Link } from "react-router-dom"


export function Formulario ({setUser}) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }

        setError(false)

        setUser(nombre)
        setUser([nombre])
    }
    

    return(
       
        <section>
            <h1>Los Robles</h1>

            <form 
            className="formulario"
            onSubmit={handleSubmit}
            >
                <input type="text" 
                placeholder="correo@ejemplo.com"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />


                <input 
                type="password" 
                placeholder="*******" 
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                />

                <button>Iniciar sesión</button>
                <a href="">¿Olvidaste tu contraseña?</a>

            </form>
            

            {error && <p>Todos los campos son obligatorios</p>}

        </section>
        
    )
}