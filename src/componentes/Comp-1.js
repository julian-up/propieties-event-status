function Comp1(proops) {

    const estilo = {
        backgroundColor: proops.bc
    }

    return (
        <div>
            <h1>Objeto selecconado: </h1>
            <div>
                {/* <h3>{proops.obj.id}</h3>
                <p>{proops.obj.postId}</p>
                <p>{proops.obj.name}</p>
                <p>{proops.obj.email}</p>
                <p>{proops.obj.body}</p> */}
                <table border={1} cellPadding={10} cellSpacing={5}>
                    <thead style={estilo}>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{proops.obj.id}</td>
                            <td>{proops.obj.name}</td>
                            <td>{proops.obj.email}</td>
                            <td>{proops.obj.body}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}; 

export default Comp1;

