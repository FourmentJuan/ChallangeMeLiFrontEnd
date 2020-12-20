import React, { Component } from 'react';
import '../styles/buscador.scss';


function Buscador(props) {
    return(
        <div className="header">
            <div className="imgHeader">
                <img src='Assets/Logo_ML.png' alt='logoMeli.jpg'/> 
            </div>
            <form className="buscadaForm">
                <filedset>
                    <input className="inputBarra" type="search"
                        placeholder="Nunca dejes de buscar"
                    />
                    <div className="divImageBuscador">
                        <button class="buttonBuscador"type="submit">
                            <img src='Assets/ic_Search.png' alt='logoMeli.jpg'/> 
                        </button>
                    </div>
                </filedset>
            </form>
        </div>
    );
}

export default Buscador;   