import React from 'react';
import './BuscadorComponent.css';

function Categorias(props) {
    return(
        <div className="categoriaDiv">
            <ul className="listaHorizontal">
                <li className="itemCategoria">
                    Electrónica, Audio y Video  
                </li>
                <li className="itemCategoria">
                    IPod
                </li>
                <li className="itemCategoria">
                    Reproductores
                </li>
                <li className="itemCategoria">
                    IPod touch
                </li>
                <li className="itemCategoriaUltimo">
                    32GB
                </li>
            </ul>
        </div>
    )
}

export default Categorias;