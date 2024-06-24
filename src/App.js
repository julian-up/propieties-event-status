// // --->USAMOS EL ROOT QUE LLAMAMOS CON LA FUNCION PARA HACER UN RELOJ DEL TIEMPO LOCAL<---

import { useState,useRef,useEffect } from "react";
import Comp1 from './componentes/Comp-1';


// function App1() {
//   const cd = new Date();
//   // return (
//   //   <div>
//   //     <h1>Hello World</h1>
//   //     <h2>Time: {cd.toLocaleTimeString()}</h2>
//   //   </div>
//   // );
// }

function App(proops){ 
  let upgdUp = () => {
    setUp( up+1 ) ;
  }
  let dwnUp = () => {
    setUp( up-1 );
  }
  async function getData() {
    try {
      const rta = await fetch('http://jsonplaceholder.typicode.com/posts/1/comments',{
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });

      if (!rta.ok) {
        throw new Error('Red Error: ' + rta.status);
      }
      let datos = await rta.json();
      
      setInfo( datos ) ;

    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  function getDatos() {
    getData();
  }

  const [up,setUp] = useState(2);
  const [info,setInfo] = useState([]);
  const [sele, setElem] = useState({});
  const cssOn = {
    color: proops.color,
    fontSize: proops.size
  };
  const pId = useRef(1) ;
  // useEffect tiene efectos sobre el Dom a diferencia del useRef
  useEffect( () => {getDatos();}, [up] ) ;

  function verInfo() {
    for( const i of info ){
      if( i.id == pId.current.value ) {
        setElem( i );
      }
    }
    for( let x=0 ; x < info.length ; x++) {
      if( info[x]["id"] == pId.current.value) {
        console.log("===> " + JSON.stringify( info[x])) ;
        setElem( info[x] )
        console.log( info[x].email );
      }
    }
  }

  return (
    <div style={cssOn}>
      <h1>Hola MUNDO</h1>
      <nav>
        <ul>
          <li>Mi Nivel es {up}</li>
        </ul>
      </nav>
    <div>
      <Comp1 obj={sele} />
    </div>
      
      <input ref={pId} type="text" placeholder="buscar"></input>
      
      <button onClick={upgdUp}>Upgrade</button>
      <button onClick={dwnUp}>Downgrade</button>  
      <button onClick={verInfo}>Sourse</button>

      <div>
        <ul>
          {info.map(
            (d,i) => (
              <li key={i}>
                <h2>{d.id}</h2>
                <p>{d.postId}</p>
                <p>{d.name}</p>
                <p>{d.email}</p>
                <p>{d.body}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
// constants.js
export default App;
