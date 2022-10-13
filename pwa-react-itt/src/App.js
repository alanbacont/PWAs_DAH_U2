import React from 'react';
import './App.css';
import mago from './images/mago.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://github.com/alanbacont/pwa-react-itt" target="_blank" rel="noopener noreferrer">
          <img src={mago} alt="MagoITT" />
        </a>
        <h2>Hola Mundo! soy una PWA en React</h2>
        <h3>Barocio Contreras Alan Martin - 18401084</h3>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center"
          }}
        ></nav>
        <p>
          Desarrollo de Aplicaciones Hibridas - Tema 2
        </p>
        <h6>Pista: Haz click en el mago para obtener magia</h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
