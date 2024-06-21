// // --->USAMOS EL ROOT QUE LLAMAMOS CON LA FUNCION PARA HACER UN RELOJ DEL TIEMPO LOCAL<---

import { useState } from "react";


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

  const cssOn = {
    color: proops.color,
    fontSize: proops.size
  };

  return (
    <div style={cssOn}>
      <h1>Hola MUNDO</h1>
      <nav>
        <ul>
          <li>Mi Nivel es {up}</li>
        </ul>
      </nav>
      <button onClick={upgdUp}>Upgrade</button>
      <button onClick={dwnUp}>Downgrade</button>
      <button onClick={getDatos}>consultar</button>

      <div>
        <ul>
          {info.map(
            (d,i) => (
              <li key={i}>
                <h3>{d.id}</h3>
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

export default App;
