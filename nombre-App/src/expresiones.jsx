function Expresiones(){
    const nombre = 'Jorge Eloy';
    const apellidos ='Gonzalez Lopez';
    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Tu nombre es: ({nombre}) y tus apelliods son: {apellidos}</h3>
            <Lista/>
        </div>
    )
}
function Lista() {
    const users = [
        {id: 1, name: 'Jorge', role: 'web develper'},
        {id: 2, name: 'Victor Dorian', role: 'web designer'},
        {id: 3, name: 'Osmar', role: 'Team leader'},
    ]
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre |</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        {
                            users.map(function(user, index){
                                return (
                                    <tr key={index}> 
                                        <td>{user.name}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                )
                            })
                        }
                    </tr>
                /</tbody>
            </table>
        </div>
    )
}
export default Expresiones