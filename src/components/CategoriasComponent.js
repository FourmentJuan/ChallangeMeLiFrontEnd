import React from 'react';
import '../styles/categoria.scss';

function Categorias(props) {
    if(props.categorias!=null)
    return(
        <ul className="listaHorizontal" >
            {
                props.categorias.map((categoria) =>{
                    return(
                        categoria.values.map((value) => {
                            return(
                                <li className="itemCategoria" key={value.id}>
                                    {value.name}
                                </li>
                            )
                        })
                    )
                })
            }
        </ul>
    )
}

export default Categorias;



















