import { useRef } from "react";

function Comp1(proops) {

    const estilo = {
        backgroundColor: proops.bc
    }

    // CHAT

    let msgXPapa = () => {
        proops.fPapa(msg.current.value);
    }

    const msg = useRef("Hola Mundo");

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
            {/* // CHAT */}
            <input ref={msg} type="text"placeholder="Cambiar el mensaje"></input>
            <button onClick={msgXPapa}>Enviar msg...</button>
        </div>
        
    );
}; 

export default Comp1;

