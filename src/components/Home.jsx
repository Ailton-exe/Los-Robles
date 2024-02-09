export function Home ({user, setUser}) {

    const handleLogout = () =>{
        setUser([])
    }
    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
                       
    <div>
    <h2>Tabla de Usuarios</h2>

    <table className="table">
  <thead>
    <tr>
      <th>Nombre del Usuario</th>
      <th>Correo del Usuario</th>
      <th>Fecha de Creación</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Usuario 1</td>
      <td>usuario1@example.com</td>
      <td>2022-02-08</td>
      <td class="acciones">
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
    <tr>
      <td>Usuario 2</td>
      <td>usuario2@example.com</td>
      <td>2022-02-08</td>
      <td class="acciones">
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
    <tr>
      <td>Usuario 3</td>
      <td>usuario3@example.com</td>
      <td>2022-02-08</td>
      <td class="acciones">
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
    
  </tbody>
</table>

<button onClick={handleLogout}>Cerrar sesión</button>
</div>

        </div>
        
    )
}