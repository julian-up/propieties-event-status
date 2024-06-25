import React, {useState} from "react";
import './Estilos.css';
// import Comp2 from './componentes/Comp-2';
// import Comp1 from './componentes/Comp-1';

function Menu() {

    // se inicia en falso porque en el momento que se crae no sea visible para que mediante un boton activemos el meneu
    const [bVMenu,setVMenu] = useState( false );

    const verMenu = () => {
        setVMenu( !bVMenu ) ;
        console.log(">>>" + bVMenu + " :), Eres una Autentica Maquina" ) ;
    }

    return (
        <div className="optionsMenus">
            <button onClick={verMenu}> Menu - {bVMenu ? 'Abierto' : 'Cerrado'}</button>

            {bVMenu && (
                <div className="menuContent">
                    <ul>
                        <li><a href="#">Componente 1</a>
                        </li>
                        <li><a href="#">Componente 2</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Menu;