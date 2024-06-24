import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
  function ref () {
    root.render(
      <div>
        <App color="green" size="20px" />  
        <App color="purple" size="30px" />
      </div>
      
    );
  }
//  funcion en referencia a algo con respecto al tiempo.
setInterval( ref,1000 );