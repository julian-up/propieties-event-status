// // --->USAMOS EL ROOT QUE LLAMAMOS CON LA FUNCION PARA HACER UN RELOJ DEL TIEMPO LOCAL<---

import { useState,useRef,useEffect } from "react";
import Comp1 from './componentes/Comp-1';
import Comp2 from './componentes/Comp-2';
import Menu from './componentes/Menu';


// function App1() {
//   const cd = new Date();
//   // return (
//   //   <div>
//   //     <h1>Hello World</h1>
//   //     <h2>Time: {cd.toLocaleTimeString()}</h2>
//   //   </div>
//   // );
// }

// la funcion de aumentar o disminuir el setUp
function App(proops){ 
  let upgdUp = () => {
    setUp( up+1 ) ;
  }
  let dwnUp = () => {
    setUp( up-1 );
  }

  // Funcion asincrona donde tenemos un moderno fetch retornando los datos de un url de objetos.JSON que nos sirven para hacer un reocrrido de datos

  async function getData() {
    try {
      const rta = await fetch('http://jsonplaceholder.typicode.com/posts/1/comments',{
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });

      if (!rta.ok) {
// si el estado de la respuesta es Diferente de OK donde (ok = true) lanzara un error new error, como 404. 500 noserver etc, adjunto el estado de la respuesta y el porque de su fallo
        throw new Error('Red Error: ' + rta.status);

      }
// await espera que rta se convieta en un objeto json y la funcion de este objeto es igual a la variable datos declarada con LET
      let datos = await rta.json();
      
      setInfo( datos ) ;

// recoge todos los errores
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };


  function getDatos() {
    getData();
  }

  // el use StaticRange, se importa, tenemos el valor y como vamos a actualizar ese valor y luego decirmos el valor principal
  const [up,setUp] = useState(0);
  const [info,setInfo] = useState([]);//arreglo vacio que es llenado con la funcion datos recogida de la funcion json en await
  const [sele, setElem] = useState({});
  const [bbcc, setBc] = useState("steelblue");
  const cssOn = {
    color: proops.color,
    fontSize: proops.size,
  };
  const [msg,setMsg] = useState("");
  const [bCom,setBCom] = useState("true");  

  const pId = useRef(1) ;
  const pBc = useRef("gray");


  // useEffect tiene efectos sobre el Dom a diferencia del useRef
  useEffect(() => {
    // se ejecuta como minimo una vez
    getDatos();
  },[up] ) ;

  // aqui practicamos el useefect entendiendo que el use efect hara algo loq ue yo le diga siempre y cuando suceda algo, en este caso, se hara un console.log del use efect cada vez que yo cambie el mesaje de msg
  useEffect(() =>{
    console.log('useEffect');
  },[msg])



  function verInfo() {
    for( const i of info ){
      if( i.id == pId.current.value ) {
        setElem( i );
      }
    setBc(pBc.current.value) ; 

    }

    for( let x=0 ; x < info.length ; x++) {
      if( info[x]["id"] == pId.current.value) {
        console.log("===> " + JSON.stringify( info[x])) ;
        setElem( info[x] )
        console.log( info[x].email );
      } else {
        console.error("ERROR")
      }
    }
  }

let msgDelHijo = (msgHijo) => {
  console.log("===> " + msgHijo);
  setMsg(msgHijo);
}


let cambiaComponente = () => {
  setBCom(!bCom);
}
  return (
    <div style={cssOn}>
      <div>
        <Menu/>
      </div>      
      { bCom && (
      <div>
        <Comp1 obj={sele} bc={bbcc} fPapa={msgDelHijo}/>
      </div>
      )}
      { !bCom && (
        <Comp2/>
      )}

      <h1>Hola MUNDO</h1>
      <nav>
        <ul>
          <li>Mi Nivel es {up}</li>
        </ul>
      </nav>
      
      <input ref={pId} type="text" placeholder="buscar"></input>

      <input ref={pBc} type="text" placeholder="Color.." onChange={verInfo}/>

      <input ref={pBc} type="text" placeholder="Color.." onChange={verInfo}/>

      <button onClick={upgdUp}>Sube de Nivel</button>
      <button onClick={dwnUp}>Baja de Nivel, pero ¿Quien quiere bajar de nivel?</button>  
      <button onClick={verInfo}>Buscar</button>
      <p>Mensaje del padre : {msg}</p>
      
      {/* <div>
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
      </div> */}
      <button onClick={cambiaComponente}>Cambiar de Componente</button>
    </div>
  );
}
// constants.js
export default App;
