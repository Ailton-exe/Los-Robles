import { Formulario } from './components/Formulario'
import { Home } from './components/Home'
import { Correo } from './components/Correo'
import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom"


function App() {

  const [user, setUser] = useState ([])

  return (

      <div className='App'>
        {
            !user.length > 0
            ? <Formulario setUser={setUser} />
            : <Home user={user} setUser={setUser}/>
        }
           
        

      </div>
      
      
  )
}

export default App
