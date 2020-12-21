import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/buscador.scss';


function Buscador(props) {
    return(
        <div className="header">
            <div className="imgHeader">
                <Link to="/">
                    <img src="http://localhost:3000/Assets/Logo_ML.png" alt='logoMeli.jpg'/> 
                </Link>
            </div>
            <form className="buscadaForm">
                <filedset>
                    <input className="inputBarra" type="search"
                        placeholder="Nunca dejes de buscar"
                    />
                    <div className="divImageBuscador">
                        <button class="buttonBuscador"type="submit">
                            <img src='http://localhost:3000/Assets/ic_Search.png' alt='logoMeli.jpg'/> 
                        </button>
                    </div>
                </filedset>
            </form>
        </div>
    );
}

export default Buscador;   