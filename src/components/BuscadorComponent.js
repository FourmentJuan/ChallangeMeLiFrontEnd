import React, { Component } from 'react';
import './BuscadorComponent.css';

function Header(){
    return(
        <div class="header">
            <img src='Assets/Logo_ML.png' alt='logoMeli.jpg'/> 
            <form>
                <filedset>
                    <input type="search"></input>
                    <button type="submit">
                        <img src='Assets/ic_Search.png' alt='logoMeli.jpg'/> 
                    </button>
                </filedset>
            </form>
        </div>
    );
}

function Buscador(props) {
    return(
      <div>
          <Header></Header>
        <h1>Hola buscador</h1>
      </div>
    );
}

export default Buscador;   